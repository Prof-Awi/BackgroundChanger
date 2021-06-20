var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;


function draw() {
  background(r,g,b);
}

function setup() {
  createCanvas(400, 400);
  btn_red = createButton("RED");
  btn_red. position(100,50);
  btn_red.mousePressed(red_bg);
  
  btn_green = createButton("GREEN");
  btn_green.position (250,50);
  btn_green.mousePressed(green_bg);
}
  

function red_bg(){
r = 255;
g = 0;
b =0;
}

function green_bg(){
  r = 0;
  g = 255;
  b =0;
  }

var colorWell;
var defaultColor = "#0000ff";

window.addEventListener("load", startup, false);
function startup() {
  colorWell = document.querySelector("#colorWell");
  colorWell.value = defaultColor;
  colorWell.addEventListener("input", updateFirst, false);
  colorWell.addEventListener("change", updateAll, false);
  colorWell.select();
}

function updateFirst(event) {
  var p = document.querySelector("body");

  if (p) {
    p.style.color = event.target.value;
  }
}

function updateAll(event) {
  document.querySelectorAll("body").forEach(function(p) {
    p.style.color = event.target.value;
  });
}