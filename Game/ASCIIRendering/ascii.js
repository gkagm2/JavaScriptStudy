const density = 'N@#W$9876543210?!abc;:+=-,._ ';
let screenX = 400;
let screenY = 400;
let gloria;
let w =15;
// Simple
//const grey = (r+g+b) /3;
// Luminance
//const grey = r*0.3+g*0.59+b*0.11;
// max RGB
//const grey = max(r,g,b);
// min RGB
//const grey = min(r,g,b);

function preload(){
    gloria = loadImage("Monster.bmp");
}

function setup() {
  createCanvas(width, height);
  video = createCapture(VIDEO);
  video.size(48,48);
}

function draw() {
  background(0);
  //image(gloria, 0, 0, width, height);

  let w = width / gloria.width;
  let h = height / gloria.height;
  
  gloria.loadPixels();
  for(let i=0 ;i < gloria.width; ++i){
      for(let j=0 ;j <gloria.height; ++j){
          const pixelIndex = (i + j * gloria.width) * 4;
          const r = gloria.pixels[pixelIndex+0];
          const g = gloria.pixels[pixelIndex+1];
          const b = gloria.pixels[pixelIndex+2];
          const avg = (r+g+b) / 3;
          noStroke();
          fill(255);
          //square(i * w, j * h , w);

          const len = density.length;
          const charIndex = floor(map(avg,0,255,len,0));


          textSize(w);
          textAlign(CENTER, CENTER);
          text(density.charAt(charIndex), i*w + w * 0.5, j*h + h * 0.5);
      }
    }
}