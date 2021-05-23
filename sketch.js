
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var treeImage,boyImage;
var ground;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var stone1;
var sun;
var c;


function preload(){
	treeImage =loadImage("Plucking mangoes/tree.png");
	boyImage =loadImage("Plucking mangoes/boy.png");
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground1=new Ground();

	mango1 = new Mango(700,350,50);
	mango2 = new Mango(750,300,65);
	mango3 = new Mango(700,350,75);
	mango4 = new Mango(670,250,55);
	mango5 = new Mango(850,180,65);
	mango6 = new Mango(900,240,60);
	mango7 = new Mango(950,270,50);
	mango8 = new Mango(850,320,55);

	stone1 = new Stone(150,575,50);

	sun1 = new Sun(100,100,40);

	c1 = new Wire(stone1.body,{x:150,y:575})

	
  
}


function draw() {
  background("cyan");
  
  imageMode(CENTER);
  image(treeImage,800,420,600,600);
  image(boyImage,200,620,150,200);

  ground1.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  stone1.display();

  sun1.display();

  c1.display();

  collision(mango1);
  collision(mango2);
  collision(mango3);
  collision(mango4);
  collision(mango5);
  collision(mango6);
  collision(mango7);
  collision(mango8);
 
 Engine.update(engine)


}

function mouseDragged(){

	Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){

	c1.fly()

}

function collision(a){

	if(stone1.body.position.x-a.body.position.x<stone1.r+a.r &&
		a.body.position.x-stone1.body.position.x<stone1.r+a.r &&
		stone1.body.position.y-a.body.position.y<stone1.r+a.r &&
		a.body.position.y-stone1.body.position.y<stone1.r+a.r){
		Body.setStatic(a.body,false)
	}
}
