const map = [[1, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1]];

class Cube {

    constructor() {
        this.x = 0;
        this.y = 0;
        this.dir = null;
    }

    print() {
        console.log(this.x + " " + this.y + " " + this.dir)
    }

    roll(dir) {
        if (dir === "right") {
            if (this.x < map[this.y].length - 1)
                if (map[this.y][this.x + 1] > 0)
                    this.x++;
            this.dir = dir;
        } else if (dir === "left") {
            if (this.x > 0)
                if (map[this.y][this.x - 1] > 0)
                    this.x--;
            this.dir = dir;
        } else if (dir === "up") {
            if (this.y > 0)
                if (map[this.y - 1][this.x] > 0)
                    this.y--;
            this.dir = dir;
        } else if (dir === "down") {
            if (map.length - 1 > this.y)
                if (map[this.y + 1][this.x] > 0)
                    this.y++;
            this.dir = dir;
        }
        console.log("Элемент с индексом Х:" + this.x + " У:" + this.y + " = " + map[this.y][this.x]);

        // this.print();
    }

}

function printMap() {
    for (let i = 0; i < map.length; i++)
        console.log(map[i]);
}

let cube = new Cube();
printMap();
document.onkeydown = function (e) {
    switch (e.keyCode) {
        case 37: {
            cube.roll("left");
            break;
        }
        case 38: {
            cube.roll("up");
            break;
        }
        case 39: {
            cube.roll("right");
            break;
        }
        case 40: {
            cube.roll("down");
            break;
        }
        default:
            break;
    }
};



