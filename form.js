class Form{
    constructor(){
         this.inputbox=createInput("ENTER NICKNAME")
         this.loginbutton=createButton("Login")
         this.greeting=createElement('h3')
    }

hideform(){
this.greeting.hide();
this.inputbox.hide();
this.loginbutton.hide();
}

display(){
    var title=createElement('h2')
    title.html("Car Racing Game")
    title.position(displayWidth/2-50,10)
    
    
    this.inputbox.position(displayWidth/2-40,displayHeight/2-80)

    
    this.loginbutton.position(displayWidth/2,displayHeight/2)

   
    

    this.loginbutton.mousePressed(()=>{
        this.inputbox.hide()
        this.loginbutton.hide();
    

         player.name=this.inputbox.value()
playercount+=1
player.index=playercount
player.updateplayerinfo();
player.updateCount(playercount);
this.greeting.html("Hello "+player.name)
this.greeting.position(displayWidth/2-70,displayHeight/4)
    })
}
}