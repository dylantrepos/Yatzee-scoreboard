import hitsAvailable from "../helpers/hitsAvailable";
import possibilities from "../helpers/possibilities";

class PlayerClass {
    
    board = [
        {
            id: 1,
            name: '1',
            score: 0
        },
        {
            id: 2,
            name: '2',
            score: 0
        },
        {
            id: 3,
            name: '3',
            score: 0
        },
        {
            id: 4,
            name: '4',
            score: 0
        },
        {
            id: 5,
            name: '5',
            score: 0
        },
        {
            id: 6,
            name: '6',
            score: 0
        },
        {
            id: 7,
            name: 'pair',
            score: 0
        },
        {
            id: 8,
            name: '2x pair',
            score: 0
        },
        {
            id: 9,
            name: 'Brelan',
            score: 0
        },
        {
            id: 10,
            name: 'Carré',
            score: 0
        },
        {
            id: 11,
            name: 'Full',
            score: 0
        },
        {
            id: 12,
            name: 'Petite suite',
            score: 0
        },
        {
            id: 13,
            name: 'Grande suite',
            score: 0
        },
        {
            id: 15,
            name: 'Yathzee',
            score: 0
        },
        {
            id: 14,
            name: 'Chance',
            score: 0
        }
    ];
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
        console.log('id : ', id)
        console.log('Board Id : ', this.board[id - 1])
        this.board[id - 1].score = score;
        this.available = [...this.available].filter(elt => elt != id);
    }

    setTotal(total) {
        this.scoreBoard.total += total;
        if(this.scoreBoard.bonus == 0 && (this.board[1].score + this.board[2].score + this.board[3].score + this.board[4].score + this.board[5].score + this.board[6].score) > 63){
            this.scoreBoard.bonus += 35
            this.scoreBoard.total += 35
        };
    }

    setBonus() {
        console.log('coucou')
        if ((this.board[1].score + this.board[2].score + this.board[3].score + this.board[4].score + this.board[5].score + this.board[6].score) > 63) this.scoreBoard.bonus += 35;
    }

    checkOne(results) {
        console.log('Res : ', results);
        return results.includes(1);
    }

}

module.exports = PlayerClass;