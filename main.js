canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

bike_width = 100;
bike_height = 90;

background_image = "road.jpg";
bike_image = "bike.png";

bike_x = 10;
bike_y = 450;

function add(){
background_imgTag = new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src = background_image;

bike_imgTag = new Image();
bike_imgTag.onload = uploadBike;
bike_imgTag.src = bike_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadBike(){
    ctx.drawImage(bike_imgTag, bike_x, bike_y, bike_width, bike_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == '38'){
        up();
        console.log("up");
    }
    if (keyPressed == '40'){
        down();
        console.log("down");
    }
    if (keyPressed == '37'){
        left();
        console.log("left");
    }
    if (keyPressed == '39'){
        right();
        console.log("right");
    }
}

function up(){
    if (bike_y >= 0){
        bike_y = bike_y - 10;
        console.log("when up arrow is pressed, x = " + bike_x + "|y = " + bike_y);
        uploadBackground();
        uploadBike();
    }
}
function down(){
    if (bike_y <= 500){
        bike_y = bike_y + 10;
        console.log("when up arrow is pressed, x = " + bike_x + "|y = " + bike_y);
        uploadBackground();
        uploadBike();
    }
}
function left(){
    if (bike_x >= 0){
        bike_x = bike_x - 10;
        console.log("when up arrow is pressed, x = " + bike_x + "|y = " + bike_y);
        uploadBackground();
        uploadBike();
    }
}
function right(){
    if (bike_x <= 700){
        bike_x = bike_x + 10;
        console.log("when up arrow is pressed, x = " + bike_x + "|y = " + bike_y);
        uploadBackground();
        uploadBike();
    }
}