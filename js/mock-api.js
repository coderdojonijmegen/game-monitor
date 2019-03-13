class MockAPI {
    constructor() {
        this.players = [
            {
                name: "Player_1",
                id: "21321",
                posX: 2,
                dX: 0.5,
                posY: 2,
                dY: 0.5,
            },
            {
                name: "Player_2",
                id: "bdqwdqw"
            },
        ]
    }

    fetchPlayers() {
        this.players.forEach(p => {
            p.posX += p.dX
        })
        return this.players;
    }
}