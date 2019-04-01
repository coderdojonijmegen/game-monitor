class API {
    constructor(canvas_) {
        this.name = "";
        this.canvas = canvas_;
        this.socket = io("ws://"+IP_ADRESS)
        var self = this;
        this.socket.on('connection', function (socket) {
            console.log("Connnnnnnected")
            
        });

        this.data = "";

        this.players = [

        ]

        var self = this; //For working first first class functions

        //Asynchronously update player information
        this.socket.on('get_players', (data) => {
            self.updatePlayers(data)
            self.socket.emit('spectate')
        })

        this.socket.on('get_name', function (data) {
            $("#name").text("Gebruikersnaam: " + data)
            self.name = data;
        })
    }

    move_up() {
        this.socket.emit('move_up')
    }

    move_left() {
        this.socket.emit('move_left')
    }

    move_right() {
        this.socket.emit('move_right')
    }

    move_down() {
        this.socket.emit('move_down')
    }

    send_styles(styles) {
        this.socket.emit("send_styles", this.styles)
    }

    set_name(name) {
        this.socket.emit("set_name", name)
    }

    //Asynchronously update player information
    updatePlayers(data) {
        
        this.players = [];
        for (var i = 0; i < data.length; i++) {
            let p = data[i]
            if(p.tagger) {
                $("#tagger").text("Tikker: " + p.name)
            }
            this.players.push({
                id: p.id,
                posX: p.position.x,
                posY: p.position.y,
                width: p.position.width,
                height: p.position.height,
                name: p.name,
                tagger: p.tagger,
                styles: p.styles,
                is_self: p.is_self
            })
        }
    }

    updateTagger(data) {
        // this.players = data;
    }

    //Simply returns the list of all players with up to date information.
    fetchPlayers() {
        return this.players;
    }
}