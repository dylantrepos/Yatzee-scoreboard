import hitsAvailable from "../helpers/hitsAvailable";
import possibilities from "../helpers/possibilities";

class PlayerClass {

    board = possibilities;
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
    }

    setBonus(bonus) {
        this.scoreBoard.bonus += bonus;
    }

    checkOne(results) {
        console.log('Res : ', results);
        return results.includes(1);
    }

}

module.exports = PlayerClass;