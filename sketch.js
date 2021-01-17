const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var polygon;

var box1,box2,box3,box4,box5,box6;
var box7,box8,box9,box10,box11;
var box12,box13,box14,box15;
var box16,box17,box18;
var box19,box20;
var box21;
 

var ground,ground2;

var launcher,launcher2;
var chain,chain2;


function setup(){
    var canvas = createCanvas(800,650);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400,550,800,10);
    ground2 = new Ground(430,430,170,10);


    box1 = new Box(380,425,25,30);
    box2 = new Box(400,425,25,30);
    box3 = new Box(420,425,25,30);
    box4 = new Box(440,425,25,30);
    box5 = new Box(460,425,25,30);
    box6 = new Box(480,425,25,30);

    box7 = new Box2(385,405,25,30);
    box8 = new Box2(410,405,25,30);
    box9 = new Box2(435,405,25,30);
    box10 = new Box2(455,405,25,30);
    box11 = new Box2(470,405,25,30);

    box12 = new Box3(400,385,25,30);
    box13 = new Box3(425,385,25,30);
    box14 = new Box3(450,385,25,30);
    box15 = new Box3(470,385,25,30);

    box16 = new Box(410,350,25,30);
    box17 = new Box(435,350,25,30);
    box18 = new Box(460,350,25,30);

    box19 = new Box2(420,310,25,30);
    box20 = new Box2(450,310,25,30);

    box21 = new Box5(435,270,25,30);

    polygon = new Polygon(200,200);

    launcher = new Launcher(100,400,5,5);
    launcher2 = new Launcher(120,400,5,5);

    chain = new Chain(polygon.body,launcher.body);
    chain2 = new Chain(polygon.body,launcher2.body);


    Engine.run(engine);


}

function draw(){
    background(0);
    

    ground.display();
    ground2.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    polygon.display();
    chain.display();
    launcher.display();
    launcher2.display();
    

    



    drawSprites();
}