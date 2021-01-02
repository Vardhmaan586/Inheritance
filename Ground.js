class Ground extends BaseClass{
    constructor(x,y,width,height){
    super(x,y,width,height);

    this.image = loadImage("sprites/ground.png")
       
Matter.Body.setStatic(this.body,{isStatic:true});
    }
    
    //function

    display(){

super.display();
    
}
}