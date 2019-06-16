var LivingCreature = require("./livingCreature")
let random = require('./random');

module.exports = class Carnivore extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 5;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 2, this.y + 2],
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }
    chooseCell(character) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    //qayluma
    move() {
        //yntruma vandak
        var newcel_p = this.chooseCell(0).concat(this.chooseCell(1))
        var newCell = random(newcel_p);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            if (newCell[0] = 0) {
                matrix[this.y][this.x] = 0;
            }
            else if (newCell[0] = 1) {
                matrix[this.y][this.x] = 1;
            }
            matrix[newY][newX] = this.index;
            this.y = newY;
            this.x = newX;
            this.energy--;
        }
    }
    eat() {
        var newCell = random(this.chooseCell(2));

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;

            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            this.y = newY;
            this.x = newX;
            this.energy += 3;
        }
    }
    mul() {
        var newCell = random(this.chooseCell(0));

        if (this.energy >= 9 && newCell) {
            var newCarnivore = new Carnivore(newCell[0], newCell[1], this.index);
            carnivoreArr.push(newCarnivore);
            matrix[newCell[1]][newCell[0]] = 3;
            this.energy = 4;
        }
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in carnivoreArr) {
                if (this.x == carnivoreArr[i].x && this.y == carnivoreArr[i].y) {
                    carnivoreArr.splice(i, 1);
                    break;
                }
            }
        }
    }
}
