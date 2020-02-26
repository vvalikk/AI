function readFile(input) {
    let file = input.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function () {
            let tmp = reader.result.split('\n');
            let map = [];
            let flag = false;
            for (let i = 0; i < tmp.length; i++) {
                map.push(tmp[i]);
            }

        let target = {
            x: 5,
            y: 4
        };

        class Cube {
            constructor() {
                this.x = 0;
                this.y = 0;
                this.dir = null;
            }

            print() {
                console.log(this.x + " " + this.y + " " + this.dir)
            }

            start() {
                for (let i = 0; i < map.length; i++) {
                    if (flag)
                        break;
                    for (let j = 0; j < map[j].length - 1; j++)
                        if (map[j][i] != 0) {
                            console.log("i = " + i, "j = " + j)
                            this.x = i;
                            this.y = j;
                            flag = true;
                            break;
                        }

                }

                console.log(map);
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
                    if (this.y > 0) {
                        if (map[this.y - 1][this.x] > 0)
                            this.y--;
                        this.dir = dir;
                    }
                } else if (dir === "down") {
                    if (map.length - 1 > this.y)
                        if (map[this.y + 1][this.x] > 0)
                            this.y++;
                    this.dir = dir;
                }
                console.log("Элемент с индексом Х:" + this.x + " У:" + this.y);
                this.print();
            }

        }


        function printMap() {
            for (let i = 0; i < map.length; i++)
                console.log(map[i]);
        }

        let cube = new Cube();
        cube.start();
        document.onkeydown = function (e) {
            let end = false;
            if (cube.x == target.x && cube.y == target.y) {
                alert("Win!");
                end = true;
            }
            switch (e.keyCode) {
                case 37: {
                    if (!end)
                        cube.roll("left");
                    break;
                }
                case 38: {
                    if (!end)
                        cube.roll("up");
                    break;
                }
                case 39: {
                    if (!end)
                        cube.roll("right");
                    break;
                }
                case 40: {
                    if (!end)
                        cube.roll("down");
                    break;
                }
                default:
                    break;
            }
        };

    };

    reader.onerror = function () {
        console.log(reader.error);
    };
}


