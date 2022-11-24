const envConfig = require("dotenv").config();
const express = require("express");
const Ably = require("ably");
const app = express();
app.use(express.static(__dirname));

const {ABLY_API_KEY,PORT} = process.env;
let globalChannel;
let activeGameRooms = {};
let peopleAccessingTheWebsite = 0;
let players = {};
let playerChannels = {};
let io = false;

const realtime = new Ably.Realtime({
    key: ABLY_API_KEY,
    echoMessages: false,
  });
  
//create a uniqueId to assign to clients on auth
const uniqueId = function () {
  return "id-" + totalPlayers + Math.random().toString(36).substr(2, 16);
};

app.use(express.static("js"));

app.get("/auth", (request, response) => {
  const tokenParams = { clientId: uniqueId() };
  realtime.auth.createTokenRequest(tokenParams, function (err, tokenRequest) {
    if (err) {
      response
        .status(500)
        .send("Error requesting token: " + JSON.stringify(err));
    } else {
      response.setHeader("Content-Type", "application/json");
      response.send(JSON.stringify(tokenRequest));
    }
  });
});

app.get("/", (request, response) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  if (++peopleAccessingTheWebsite > 2 && io) {
    response.sendFile(__dirname + "/deep_trawler.html");
  } else {
    response.sendFile(__dirname + "/game.html");
  }
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});