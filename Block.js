class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image = loadImage("block.png")
      this.width = width;
      this.height = height;
      this.Visiblity = 255;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed < 5){
        var pos= this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width, this.height);
      }
      else{
        push();
        this.Visiblity = this.Visiblity - 1;
        tint(255,this.Visiblity);
        World.remove(world, this.body);
        //image(this.image, this.body.position.x, this.body.position.y, this.height, this.width);
        pop();
      }
      
    }
}