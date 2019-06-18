
//! Requiring modules  --  START
var Grass = require("./modules/grass.js");
var GrassEater = require("./modules/grassEater.js");
var carnivore = require("./modules/carnivore.js");
var car = require("./modules/car.js");
var sniper = require("./modules/sniper.js");
let random = require('./modules/random');
//! Requiring modules  --  END


//! Setting global arrays  --  START
grassArr = [];
grassEaterArr = [];
carnivoreArr = [];
carArr = [];
sniperArr = [];
matrix = [];

// counters
grassCount = 0;
grassEaterCount = 0;
carnivoreCount = 0;
carCount = 0;
sniperCount = 0;

//! Setting global arrays  -- END




//! Creating MATRIX -- START
function matrixGenerator(matrixSize, grass, grassEater, carnivore, car, sniper) {
    for (let i = 0; i < matrixSize; i++) {
        matrix[i] = [];
        for (let o = 0; o < matrixSize; o++) {
            matrix[i][o] = 0;
        }
    }
    for (let i = 1; i < grass; i++) {
        let customX = Math.floor(random(matrixSize)); // 0-9
        let customY = Math.floor(random(matrixSize)); // 4
        matrix[customY][customX] = 1;
    }
    for (let i = 2; i < grassEater; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 2;
    }
    for (let i = 0; i < carnivore; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 3;
    }
    for (let i = 0; i < car; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 4;
    }
    for (let i = 0; i < sniper; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 5;
    }
}
matrixGenerator(30, 10, 5, 2, 3, 1);
//! Creating MATRIX -- END



//! SERVER STUFF  --  START
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);
//! SERVER STUFF END  --  END



function creatingObjects() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var grass = new Grass(x, y);
                grassArr.push(grass);
                grassCount++;
            }

            else if (matrix[y][x] == 1) {
                var grassEater = new GrassEater(x, y);
                grassEaterArr.push(grassEater);
                grassEaterCount++
            }

            else if (matrix[y][x] == 3) {
                var carnivore = new Carnivore(x, y);
                carnivoreArr.push(carnivore);
                carnivoreCount++;
            }
            else if (matrix[y][x] == 4) {
                var car = new Car(x, y);
                carArr.push(car);
                carCount++;
            }
            else if (matrix[y][x] == 5) {
                var sniper = new Sniper(x, y);
                sniperArr.push(sniper);
                sniperCount++;
            }
        }
    }
}
creatingObjects();

function game() {
    if (grassArr[0] !== undefined) {
        for (var i in grassArr) {
            grassArr[i].mul();
        }
    }
    if (grassEaterArr[0] !== undefined) {
        for (var i in grassEaterArr) {
            grassEaterArr[i].eat();
        }
    }
    if (carnivoreArr[0] !== undefined){
        for (var i in carnivoreArr) {
            carnivoreArr[i].move();
        } 
    }
    //! Object to send
    let sendData = {
        matrix: matrix,
        grassCounter: grassCount,
        grassEaterCounter: grassEaterCount,
        carnovoreCounter: carnivoreCount,
        carCounter: carCount,
        sniperCounter: sniperCount
    }

    //! Send data over the socket to clients who listens "data"
    io.sockets.emit("data", sendData);
}



setInterval(game, 1000)