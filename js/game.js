class Game {
    constructor(api_) {
        this.api = api_;

        this.width = $(window).width();
        this.height = $(window).height();

        this.canvas = SVG('drawing').size($(window).width(), $(window).height()-200)

        this.players = [
            new Player("21321", this.canvas, 10, 10, "Player_1"),
            //   new Player("bdqwdqw", this.canvas, 200, 10, "Player_2"),
        ]

        this.viewport = new Viewport(this.width, this.height, 0, 0);
    }

    draw() {
        this.players.forEach(player => {
            player.Update();
            player.Draw(this.viewport);
        });
    }

    update() {
     //   console.log("Updating")
        let newPlayers = this.api.fetchPlayers();

        newPlayers.forEach(player => {
            var current_player = this.players.find(p => {
                return p.id == player.id;
            })
            if (current_player != null) {
                current_player.posX = player.posX
                current_player.dY = 0
            } else {
                this.players.push(new Player(
                    player.id,
                    this.canvas,
                    player.posX,
                    player.posY,
                    player.name,
                ))
            }
        });



    }
}