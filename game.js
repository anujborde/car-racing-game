class Game{
    constructor(){

    }

getState(){
    database.ref('GameState').on("value",function(data){
        gamestate=data.val()
    })
}
updateState(state){
database.ref('/').update({
    GameState:state
})
}
start(){


if(gamestate===0){
    player=new Player()
    player.getCount()
    form=new Form()
    form.display();
}
car1=createSprite(100,200)
car2=createSprite(300,200)
car3=createSprite(500,200)
car4=createSprite(700,200)
Cars=[car1,car2,car3,car4] 

}

play(){
    form.hideform();
    textSize(30)
    text("START GAME ",120,100)
    Player.getplayerinfo();
    if(allplayers!==undefined){
        var index=0
        var x=200
        var y
        for(var plr in allplayers){
            index+=1
           x+=200
           y=displayHeight-allplayers[plr].distance
           Cars[index-1].x=x
           Cars[index-1].y=y
           if(index===player.index){
               Cars[index-1].shapeColor="red"
           }
           
        }
    }
    if(keyDown(UP_ARROW) && player.index!==null){
   player.distance+=30
   player.updateplayerinfo();
    
    }
    drawSprites();
}


}