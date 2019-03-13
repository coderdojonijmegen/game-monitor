class API {

    constructor(canvas_) {
        this.canvas = canvas_;
        this.socket = io("ws://45.77.139.8:3000")

        this.socket.on('connection', function (socket) {
            console.log("Connnnnnnected")
        });

        this.data = "";

        this.players = [

        ]

        // this.socket.on('get_name', function(data) { _this.setName(data) })
        // this.socket.on('tag', function(data) { _this.showTaggerText(data) })
        var self = this;
        this.socket.on('get_players', (data) => {
            self.updatePlayers(data)
        })

        this.socket.on('get_name', function (data) { 
            $("#name").text("Username: "+data)
         })

        $("#right").click(function () {
            self.socket.emit('move_right')
        })

        $("#left").click(function () {
            self.socket.emit('move_left')
        })

        $("#up").click(function () {
            self.socket.emit('move_up')
        })

        $("#down").click(function () {
            self.socket.emit('move_down')
        })
        // this.socket.on('input_error', function(data) { _this.showInputError(data) })
        // this.socket.on('tagger_monitor', function(data) { _this.showMonitor(data) })    
    }

    updatePlayers(data) {
        this.players = [];

        for (var i = 0; i < data.length; i++) {
            let p = data[i]
            this.players.push({
                id: p.id,
                posX: p.position.x / 7,
                posY: p.position.y / 7,
                name: p.name
            })
        }
    }

    updateTagger(data) {
        // this.players = data;
    }

    fetchPlayers() {
        //This is temporary
        //   /  this.socket.emit('move_right')

        return this.players;
    }
}