import possibilities from "../helpers/possibilities";

class PlayerClass {

    board = possibilities;
    scoreBoard = {
        bonus: 0,
        total: 0,
    }

    constructor(name, id) {
        this.name = name;
        this.id = id;
    };

    getFullData() {
        return this;
    };

    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    setScore(name, score) {
        this.board[name] += score;
    }
}

module.exports = PlayerClass;