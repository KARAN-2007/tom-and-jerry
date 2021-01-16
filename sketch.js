var tom,t1,t2;
var jerry,j1,j2;
var bg,backG;
function preload() {
    //load the images here
    bg=loadImage("garden.png");
    t1=loadAnimation("tomOne.png");
    t2=loadAnimation("tomTwo.png","images/tomThree.png");
    t3=loadAnimation("tomFour.png");
    j1=loadAnimation("jerryThree.png");
    j2=loadAnimation("jerryFour.png");
}

function setup(){
    createCanvas(1000,800);
     backG=createSprite(500,400,5,5);
     backG.addImage(bg);
     backG.scale=1.2;
     //create tom and jerry sprites here
     tom=createSprite(900,700,50,50);
    
     tom.addAnimation("run",t2);
     //tom.addAnimation("end",t3);
     tom.scale=0.1;
     jerry=createSprite(100,700,50,50);
     jerry.addAnimation("run",j1);
     

     jerry.scale=0.1;

}

function draw() {
    console.log(jerry.width);
    background(0);
    //Write condition here to evalute if tom and jerry collide
    if(keyDown("LEFT")
    ){
        tom.x=tom.x-5;
        
        tom.changeAnimation("run",t2);
     }
     
     if(keyDown("RIGHT")
     ){
        tom.x=tom.x+5;
        tom.changeAnimation("run",t2);
     }
   

     if(tom.x-jerry.x<tom.width/2+jerry.width/2
        && jerry.x-tom.x<tom.width/2+jerry.width/2
        && tom.y-jerry.y<tom.height/2+jerry.height/2
        && jerry.y-tom.y<tom.height/2+jerry.height/2) {
       
         jerry.addAnimation("end",j2)
         jerry.changeAnimation("end")
         tom.addAnimation("end",t3);
         tom.changeAnimation("end")
        }else{
            jerry.changeAnimation("run",j1)
            tom.changeAnimation("run",t2);
        }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
