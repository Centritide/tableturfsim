const envConfig = require("dotenv").config();
const express = require("express");
const Ably = require("ably");
const app = express();
const {ABLY_API_KEY,PORT} = process.env;
let globalChannel;
let activeGameRooms = {};

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

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});