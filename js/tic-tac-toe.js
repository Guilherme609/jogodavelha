const tic_tac_toe = {
    board: ['', '', '', '', '', '', '', '', ''],
    simbols: {
        opitions: ['X', 'O'],
        turn_index: 0,
        charge: function () {
            this.turn_index = (this.turn_index === 0 ? 1 : 0);
        }

    },
    conteiner_element: null,
    gameover: false,

    init: function (conteiner) {
        this.conteiner_element = conteiner;
    },

    make_play: function (position) {
        if (this.gameover) return false;
        if (this.board[position] === '') {
            this.board[position] = this.simbols.opitions[this.simbols.turn_index];
            this.draw();

            this.simbols.charge();
        }

    },

    draw: function () {
        let content = '';

        for (i in this.board) {
            content += '<div onclick="tic_tac_toe.make_play(' + i + ')">' + this.board[i] + '</div>';
        }
        this.conteiner_element.innerHTML = content;
    }
};