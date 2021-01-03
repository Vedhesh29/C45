var bg, bgImg; 
var virus; 
var virus1, virus2, virus3; 
var virusG; 
var antivirus, antivirusImg; 
var Rand1, Rand2, rand1, rand2, rand3, rand4; 

function preload(){
    bgImg = loadImage("binary code img.jpg");
    virus1 = loadImage("virus.png");
    virus2 = loadImage("virus 2.png");
    virus3 = loadImage("virus 3.png"); 
    antivirusImg = loadImage("antivirus.png"); 

}


function setup(){
    createCanvas(1200,800); 

    bg = createSprite(600,400,10,10);
    bg.addImage("background", bgImg); 
    bg.scale = 0.75;
    bg.velocityX = -3; 

    antivirus = createSprite(600, 600, 10,10); 
    antivirus.addImage("anti", antivirusImg); 

}

function draw(){
    background(0);

    if (bg.x<500){
        bg.x=600; 
    }
  drawSprites();
}


