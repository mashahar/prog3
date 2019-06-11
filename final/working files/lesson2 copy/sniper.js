class Sniper extends LivingCreature{
    constructor(x, y, index){
        super(x, y, index);
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
            [this.x + 1, this.y+1],
            [this.x + 2, this.y+2],
            [this.x + 3, this.y+3],
            [this.x + 4, this.y+4],
            [this.x + 5, this.y+5],
            [this.x + 6, this.y+6],
            [this.x - 1, this.y-1],
            [this.x - 2, this.y-2],
            [this.x - 3, this.y-3],
            [this.x - 4, this.y-4],
            [this.x - 5, this.y-5],
            [this.x - 6, this.y-6],
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
            [this.x + 2, this.y + 2],//br
            [this.x - 3, this.y - 3],
            [this.x, this.y - 3],
            [this.x + 3, this.y - 3],
            [this.x - 3, this.y],
            [this.x + 3, this.y],
            [this.x - 3, this.y + 3],
            [this.x, this.y + 3],
            [this.x + 4, this.y + 4],
            [this.x - 4, this.y - 4],
            [this.x, this.y - 4],
            [this.x + 4, this.y - 4],
            [this.x - 4, this.y],
            [this.x + 4, this.y],
            [this.x - 4, this.y + 4],
            [this.x, this.y + 4],
            [this.x + 4, this.y + 4],
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],//br
            [this.x + 5, this.y - 5],
            [this.x - 5, this.y],
            [this.x + 5, this.y],
            [this.x - 5, this.y + 5],
            [this.x, this.y + 5],
            [this.x + 6, this.y + 6],
            [this.x - 6, this.y - 6],
            [this.x, this.y - 6],
            [this.x + 6, this.y - 6],
            [this.x - 6, this.y],
            [this.x + 6, this.y],
            [this.x - 6, this.y + 6],
            [this.x, this.y + 6],
            [this.x + 6, this.y + 6]
        ];
        this.energy = 0;
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
    shoot(){
        function getRandomTime(min, max){
            return Math.random() * (max - min) + min;
        }
        getRandomTime(15,30)
        var target_prep = this.chooseCell(1).concat(this.chooseCell(2),this.chooseCell(3),this.chooseCell(5));
        var target = random(target_prep);
        var target_x = target[0];
        var target_y = target[1];
        if (target[0] = 1){
            for (var i in grassArr){
                grassArr.splice(target[0], i);
            } 
        }
        else if (target[0] = 2){
            for (var i in grassEaterArr){
                grassEaterArr.splice(target[0], i);
            } 
        }
        else if (target[0] = 3){
            for (var i in carnivoreArr){
                carnivoreArr.splice(target[0], i);
            } 
        }
        matrix[target_y][target_x] = 0;
    }
}
