var LivingCreature = require("./LivingCreature")
var random = require("./random")

module.exports = class Car extends LivingCreature {
    getNewCoordinates() {
        this.directions = [
            [this.x + 1, this.y],
            [this.x + 2, this.y],
            [this.x + 3, this.y],
            [this.x + 4, this.y],
            [this.x + 5, this.y],
            [this.x + 6, this.y],
            [this.x - 1, this.y],
            [this.x - 2, this.y],
            [this.x - 3, this.y],
            [this.x - 4, this.y],
            [this.x - 5, this.y],
            [this.x - 6, this.y],
        ];
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
    drive() {
        this.getNewCoordinates();
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
        }

    }
    runOver() {
        var newcel_p = this.chooseCell(1).concat(this.chooseCell(2), this.chooseCell(3))
        var newCell = random(newcel_p);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;

            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            for (var i in carnivoreArr) {
                if (newX == carnivoreArr[i].x && newY == carnivoreArr[i].y) {
                    carnivoreArr.splice(i, 1);
                    break;
                }
            }
            this.y = newY;
            this.x = newX;
        }
    }
}