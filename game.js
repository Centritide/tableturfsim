//pixi stuff
let card_data;
const app = new PIXI.Application({ backgroundColor: 0x551158 });

// fetch and load stuff as needed.
fetch("data/data2.json").then((response) => {return response.json()}).then((data) => {
  console.log(data);
  let a = data[0];
  console.log(a);
  console.log(typeof(a));
  // let data = JSON.parse(a);
  let n = data[0].Name;
  const style = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 36,
    fill: ['#ffffff', '#00ff99'], // gradient
    stroke: '#4a1850',
    strokeThickness: 5,
  });
  const basicText = new PIXI.Text(n,style);
  document.body.appendChild(app.view);
  
  app.stage.addChild(basicText);})




