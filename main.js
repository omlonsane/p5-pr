function preload()
{
    img=loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf3U8Ru2prCZeIFk6hWOdj7GHHA56aNtIg6g&usqp=CAU");

}

function setup()
{
    canvas=createCanvas(500,400);
    canvas.position(70,200);

}
function draw()
{
    image(img,100,80,300,250);
    stroke(255,0,0);
    fill(255,0,0);

 circle(40,40,50);
 circle(460,40,50);
 circle(40,360,50);
 circle(460,360,50);


 stroke(0,255,0);
    fill(0,255,0);
    
 rect(63, 27, 375, 25);
  rect(63, 347, 375, 25); 
  rect(27, 63, 25, 275);
   rect(448, 63, 25, 275);

 
 

 
 

}
