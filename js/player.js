class Player {
    constructor(id_, posX_, posY_, name_) {
        this.id = id_;
        
        this.posX = 0;
        this.posY = 0;

        this.dX = 0;
        this.dY = 0;

        this.name = name_;

        //Add player into the 'drawing DIV'
        $("#drawing").append("<div id='"+this.id+"' class='player'><div>")
    }


    //Update player and draw
    Update(data, viewport) {
        this.posX = data.posX
        this.posY = data.posY
        let self = this
        
        for (var property in data.styles) {
            if (data.styles.hasOwnProperty(property)) {
                $("#"+self.id).css(property, data.styles[property]);
            }
        }

        if(data.tagger) {
            $("#"+self.id).css("border", "3px solid yellow");
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#"+this.id).offset().top+400,
            }, 2000);
        } else if($("#"+self.id).css("border") == "3px solid yellow") {
            $("#"+self.id).css("border", "none");
        }

        if(!data.is_self) {
            $("#"+self.id).css("z-index", "-2");
        }
        
        $("#"+self.id).css("height", data.height+"px");
        $("#"+self.id).css("width", data.width+"px");

        //Map coordinates to screenspace based on viewport size
        var newX = ((this.posX-0)/(5000-this.posX) * (0-viewport.width) + viewport.width) + viewport.posX
        var newY = ((this.posY-0)/(5000-this.posY) * (0-viewport.height) + viewport.height) + viewport.posY

        //Update location
        $("#"+this.id).css('left', this.posX);
        $("#"+this.id).css('top', this.posY);
    }
}