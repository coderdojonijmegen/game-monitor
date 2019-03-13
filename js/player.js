class Player {
    constructor(id_, canvas_, posX_, posY_, name_) {
        this.canvas = canvas_;
        this.id = id_;
        
        this.posX = posX_;
        this.posY = posY_;

        this.dX = 0;
        this.dY = 0;

        this.name = name_;
        this.rect = this.canvas.rect(100, 100).move(this.posX, this.posY).attr({ fill: '#f06' })
    }

    Update() {
        this.posX += this.dX;
        this.posY += this.dY;
    }

    Draw(viewport) {
     //   console.log(this.posX);
        this.rect.move(this.posX, this.posY)
    }
}