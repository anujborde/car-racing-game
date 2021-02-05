class Player{
    constructor(){
    this.name=null
    this.index=null
    this.distance=0

    }
    getCount(){
        database.ref('PlayerCount').on("value",(data)=>{
playercount=data.val()
        })
    }
    updateCount(count){
        database.ref('/').update(
            {
                PlayerCount:count
            }
        )
    }
    updateplayerinfo(){
var playerindex="Players/player"+player.index
database.ref(playerindex).set({
    Name:this.name,
    distance:this.distance  
})
    }

  static getplayerinfo(){
database.ref("Players").on("value",(data)=>{
    allplayers=data.val();
})


    }
    
}