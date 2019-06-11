
var grassArr = [];
var grassEaterArr = [];
var carnivoreArr = [];
var carArr = [];
var side = 20;

let matrix = []; // Մատրիցի ստեղծում
let rows = 30; // Տողերի քանակ
let columns = 40; // Սյուների քանակ

for (let y = 0; y < rows; y++) {
    matrix[y] = []; // Մատրիցի նոր տողի ստեղծում
    for (let x = 0; x < columns; x++) {
        let a = Math.floor(Math.random() * 100);
        if (a >= 0 && a < 30) {
            matrix[y][x] = 0;
        }
        if (a >= 30 && a < 50) {
            matrix[y][x] = 1;
        }
        else if (a >= 50 && a < 80) {
            matrix[y][x] = 2;
        }
        else if (a >= 80 && a < 90) {
            matrix[y][x] = 3;
        }
        else if (a >= 90 && a < 95) {
            matrix[y][x] = 4;
        }
        else if (a >= 95 && a < 100) {
            matrix[y][x] = 5;
        }
    }
}

function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');


    //pttvum em matrix mejov u stexcum em object

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                var et = new GrassEater(x, y, 2);
                grassEaterArr.push(et);
            }
            else if (matrix[y][x] == 3) {
                var cr = new Carnivore(x, y, 3);
                carnivoreArr.push(cr);
            }
            else if (matrix[y][x] == 4) {
                var au = new Car(x, y, 4);
                carArr.push(au);
            }
        }
    }
}
//draw uxaki nerkuma
function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
        }
    }

    //kanchum em methodnery
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat();
        grassEaterArr[i].move();
        grassEaterArr[i].mul();
        grassEaterArr[i].die();
    }
    for (var i in carnivoreArr) {
        carnivoreArr[i].move();
        carnivoreArr[i].eat();
        carnivoreArr[i].mul();
        carnivoreArr[i].die();
    }
    for (var i in carArr) {
        carArr[i].drive();
        carArr[i].runOver();
    }

}




