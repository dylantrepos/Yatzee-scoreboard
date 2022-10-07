import possibilities from "../helpers/possibilities";

class PlayerClass {

    board = possibilities;

    score = 0;

    constructor(name, id) {
        this.name = name;
        this.id = id;
    };

    getFullData() {
        return this;
    };

    getName() {
        return 'name is : ' + this.name;
    };

    setScore(name, score) {
        this.board[name] += score;
    }
}

module.exports = PlayerClass;