//pixi stuff
var data;
var request = new XMLHttpRequest();
request.open("GET", "src/data/card_data.json", false);
request.send(null);
//request.onreadystatechange = function() {
  if ( request.readyState === 4 && request.status === 200 ) {
    data = JSON.parse(request.responseText);
    console.log(data);
    console.log(data.Splattershot.name);
  }
//}
console.log(data);
n = data.Splattershot.name;
const basicText = new PIXI.Text(n);
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
app.stage.addChild(basicText);


