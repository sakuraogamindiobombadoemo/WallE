canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

wallWidth = 100;
wallHeight = 90;

backgroundImage = "luna-moon.gif";

wallImage = "wall-e-disney.gif";

wallX = 10;
wallY = 10;

function add() {
    backgroundImgTag = new Image();
    backgroundImgTag.onload = uploadBackground;
    backgroundImgTag.src = backgroundImage;

    wallImgTag = new Image();
    wallImgTag.onload = uploadwall;
    wallImgTag.src = wallImage;
}

function uploadBackground()
{
    ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadwall(){
    ctx.drawImage(wallImgTag, wallY, wallX, wallWidth, wallHeight);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed =='38')
    {
        up();
        console.log("up");
    }
    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }
    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }
    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }
}

function up()
{
    if(wallY >=0)
    {
        wallY = wallY - 10;
        console.log("Quando a seta para cima for prescionada, x = " + wallX + "| y = " +wallY);
        uploadBackground();
        uploadwall();
    }
  }

  function down(){

    if(wallY <=500)
    {
        wallY =wallY + 10;
        console.log("Quando a seta para baixo for prescionada, x = " + wallX + "| y = " + wallY);
        uploadBackground();
        uploadwall();
    }
}   

    function left() {

    
    if(wallX >=0){
        wallX = wallX - 10;
        console.log("Quando a seta para esquerda for prescionada, x = " + wallX + "| y = " +wallY);
        uploadBackground();
        uploadwall();
    }
}


function right() {
    if(wallX <=700){
        wallX = wallX + 10;
        console.log("Quando a seta para direita for prescionada, x = " + wallX + "| y = " +wallY);
        uploadBackground();
        uploadwall();
    }
}