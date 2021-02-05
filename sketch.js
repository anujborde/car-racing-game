var  database
var gamestate=0
var playercount
var game,player,form,allplayers
var car1
var car2,car3,car4
var Cars

function setup(){
createCanvas(displayWidth-20,displayHeight-30)

 database=firebase.database();
 game= new Game()
 game.getState();
game.start()




}

function draw(){

if(playercount===4){
 game.updateState(1)
}
if(gamestate===1){
    clear();
    game.play();
}

}
