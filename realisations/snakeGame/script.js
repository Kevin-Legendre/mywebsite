window.onload = function () {

    const canvasDiv = document.querySelector('.canvas');
    const playBtn = document.querySelector('.dir-start');

    const canvasWidth = 900;
    const canvasHeight = 600;
    const blockSize = 30;
    let canvas;
    let ctx;
    const delay = 100;
    let snakee;
    let applee;
    const widthInBlocks = canvasWidth / blockSize;
    const heightInBlocks = canvasHeight / blockSize;
    let score;
    let timeout;

    init();

    document.body.onkeyup = function (e) {
        if (e.keyCode == 32) {
            start();
        }
    }



    function init() {
        canvas = document.createElement('canvas');
        ctx = canvas.getContext('2d');
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        canvas.style.border = "10px solid #314028";
        canvas.style.display = "block";
        canvas.style.margin = "20px auto";
        canvas.style.backgroundColor = "#ACCB9D";
        canvasDiv.appendChild(canvas);
        snakee = new Snake([[15, 10]], "right");
        applee = new Apple([10, 10]);
        score = 0;
        snakee.draw();
        applee.draw();
        drawStart();
    }

    function drawStart() {
        ctx.save();
        ctx.font = '30px sans-serif';
        ctx.fillStyle = "#46563C";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        let centreX = canvasWidth / 2;
        let centreY = canvasHeight / 2;
        ctx.strokeText('Appuyer sur la touche ESPACE ou PLAY pour jouer', centreX, centreY - 120);
        ctx.fillText('Appuyer sur la touche ESPACE ou PLAY pour jouer', centreX, centreY - 120);

        ctx.restore();
    }

    function refreshCanvas() {
        playBtn.firstChild.classList.remove('active')
        snakee.advance();
        if (snakee.checkCollision()) {
            gameOver();
        } else {
            if (snakee.isEatingApple(applee)) {
                snakee.eatApple = true;
                score++;
                do {
                    applee.setNewPosition();
                } while (applee.isOnSnake(snakee))
            }
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore();
            snakee.draw()
            applee.draw();
            timeout = setTimeout(refreshCanvas, delay);
        }

    }

    function gameOver() {
        playBtn.firstChild.classList.add('active')
        ctx.save();
        ctx.font = 'bold 70px sans-serif';
        ctx.fillStyle = "#314028";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.lineWidth = 3;
        let centreX = canvasWidth / 2;
        let centreY = canvasHeight / 2;
        ctx.fillText('Game Over', centreX, centreY - 180);
        ctx.font = 'bold 30px sans-serif';
        ctx.fillText('Appuyer sur la touche ESPACE ou PLAY pour rejouer', centreX, centreY - 120);
        ctx.restore();
    }

    function drawScore() {
        ctx.save();
        ctx.font = 'bold 100px sans-serif';
        ctx.fillStyle = "#6E8D5A";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        let centreX = canvasWidth / 2;
        let centreY = canvasHeight / 2;
        ctx.fillText(score.toString(), centreX, centreY);

        ctx.restore();
    }

    function drawBlock(ctx, position) {
        let x = position[0] * blockSize;
        let y = position[1] * blockSize;
        ctx.fillRect(x, y, blockSize, blockSize);
    }

    function restart() {
        snakee = new Snake([[15, 10]], "right");
        applee = new Apple([10, 10]);
        score = 0;
        clearTimeout(timeout);
        refreshCanvas();
    }

    function Snake(body, direction) {
        this.body = body;
        this.direction = direction;
        this.eatApple = false;

        this.draw = function () {
            ctx.save();
            ctx.fillStyle = '#46563C';
            for (let i = 0; i < this.body.length; i++) {
                drawBlock(ctx, this.body[i]);
            }
            ctx.restore();
        }

        this.advance = function () {
            let nextPosition = this.body[0].slice();
            switch (this.direction) {
                case "right":
                    nextPosition[0]++;
                    break;
                case "left":
                    nextPosition[0]--;
                    break;
                case "down":
                    nextPosition[1]++;
                    break;
                case "up":
                    nextPosition[1]--;
                    break;
                default:
                    throw ('Invalid direction');

            }
            this.body.unshift(nextPosition);
            if (!this.eatApple) {
                this.body.pop();
            } else {
                this.eatApple = false;
            }
        }


        this.setDir = function (newDir) {
            let allowedDir;
            switch (this.direction) {
                case "right":
                case "left":
                    allowedDir = ["up", "down"];
                    break;
                case "down":
                case "up":
                    allowedDir = ["left", "right"];
                    break;
                default:
                    throw ('Invalid direction');
            }

            if (allowedDir.indexOf(newDir) > -1) {
                this.direction = newDir;
            }
        }

        this.checkCollision = function () {
            let wallCollision = false;
            let snakeCollision = false;
            let head = this.body[0];
            let rest = this.body.slice(1);
            let snakeX = head[0];
            let snakeY = head[1];
            let minX = 0;
            let minY = 0;
            let maxX = widthInBlocks - 1;
            let maxY = heightInBlocks - 1;
            let isNotBetweenHorizontalWalls = snakeX < minX || snakeX > maxX;
            let isNotBetweenVerticalWalls = snakeY < minY || snakeY > maxY;

            if (isNotBetweenHorizontalWalls || isNotBetweenVerticalWalls) {
                wallCollision = true;
            }

            for (let i = 0; i < rest.length; i++) {
                if (snakeX === rest[i][0] && snakeY === rest[i][1]) {
                    snakeCollision = true;
                }
            }

            return wallCollision || snakeCollision;
        }

        this.isEatingApple = function (appleToEat) {
            let head = this.body[0];

            if (head[0] === appleToEat.position[0] && head[1] === appleToEat.position[1]) return true; else return false;
        }
    }

    function Apple(position) {
        this.position = position;
        this.draw = function () {
            ctx.save();
            ctx.fillStyle = "#E5E5E5";
            ctx.beginPath();
            const radius = blockSize / 2;
            let x = this.position[0] * blockSize + radius;
            let y = this.position[1] * blockSize + radius;
            ctx.arc(x, y, radius, 0, Math.PI * 2, true);
            ctx.fill();
            ctx.restore();
        };

        this.setNewPosition = function () {
            let newX = Math.round(Math.random() * (widthInBlocks - 1));
            let newY = Math.round(Math.random() * (heightInBlocks - 1));
            this.position = [newX, newY];
        };

        this.isOnSnake = function (snakeToCheck) {
            let isOnSnake = false;

            for (let i = 0; i < snakeToCheck.body.length; i++) {
                if (this.position[0] === snakeToCheck.body[i][0] && this.position[1] === snakeToCheck.body[i][1])
                    isOnSnake = true;
            }

            return isOnSnake;
        }
    }

    const dirButtons = document.querySelectorAll('.dir')

    dirButtons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            handleKeyDown(e.target.parentNode.dataset.direction)
        })
    })

    document.addEventListener('keydown', function (e) {
        handleKeyDown(e.keyCode)
    })

    function handleKeyDown(e) {
        let newDir;

        switch (e) {
            case "left":
            case 37:
                newDir = "left"
                break;
            case "up":
            case 38:
                newDir = "up"
                break;
            case "right":
            case 39:
                newDir = "right"
                break;
            case "down":
            case 40:
                newDir = "down"
                break;
            case "start":
                if (playBtn.firstChild.matches('.active')) {
                    restart()
                    return
                }
                break;
            case 32:
                restart()
                return;
            default:
                return;
        }
        snakee.setDir(newDir);
    }

}
