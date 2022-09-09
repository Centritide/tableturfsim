// import * as PIXI from "pixi.js";
// import "./board.js";
// import "./card.js";

//pixi stuff
const app = new PIXI.Application({ backgroundColor: 0x1099bb });
document.body.appendChild(app.view);
const style = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 36,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#ffffff', '#00ff99'], // gradient
    stroke: '#4a1850',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440,
    lineJoin: 'round',
});


let cards = JSON.parse("./data/card_data.json");
const basicText = new PIXI.Text(cards);

