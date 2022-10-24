//pixi stuff
var data;
var request = new XMLHttpRequest();
request.open("GET", "src/data/data2.json", false);
request.send(null);
//request.onreadystatechange = function() {
  if ( request.readyState === 4 && request.status === 200 ) {
    data = JSON.parse(request.responseText);
    console.log(data);
    console.log(data[0].Name);
  }
//}
console.log(data);
n = data[0].Name;
const basicText = new PIXI.Text(n);
const app = new PIXI.Application({ backgroundColor: 0x551158 });
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


