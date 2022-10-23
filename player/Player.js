import hitsAvailable from "../helpers/hitsAvailable";
import possibilities from "../helpers/possibilities";


class PlayerClass {
    
    board = possibilities();
    available = hitsAvailable;
    scoreBoard = {
        bonus: 0,
        total: 0,
    }

    constructor(name, id) {
        this.name = name;
        this.id = id;
    }

    getFullData() {
        return this;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    setScore(id, score) {
        this.board[id - 1].score = score;
        this.available = [...this.available].filter(elt => elt != id);
    }

    setTotal(total) {
        this.scoreBoard.total += total;
        if((this.scoreBoard.bonus == 0) && (this.board[0].score + this.board[1].score + this.board[2].score + this.board[3].score + this.board[4].score + this.board[5].score) > 63){
            this.scoreBoard.bonus += 35
            this.scoreBoard.total += 35
        };
    }
}

module.exports = PlayerClass;