var cvs=document.getElementById("canvas");
var ctx=cvs.getContext("2d");

var grid=new Image();
grid.src="img/grid.png";

var two = new Image();
var four = new Image();
 two.src="img/2.jpg";
 four.src="img/4.jpg";

function draw(){

    ctx.drawImage(grid, 0,0,600,600);
    ctx.drawImage(two, 20,20,100,100);
    ctx.drawImage(four, 180,180,100,100);
}

four.onload=draw;

document.addEventListener('keydown', event=>{

    switch(event.keyCode){

        case 37: //left 
        moveLeft();
        break;

        case 38: //up
        moveUp
        break;

        case 39: //right
        game.movePieceright();
        view.renderplayfield(game.getState());
        break;

        case 40: //down
        game.movePiecedown();
        view.renderplayfield(game.getState());
        break;
        
    }


})