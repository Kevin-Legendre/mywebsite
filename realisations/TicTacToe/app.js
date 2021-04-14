window.onload = function () {
    let player = 'X'
    let lastMove =[]

    const blockList = document.querySelectorAll('td')
    const win = document.getElementById('div-win')
    const endGame = document.querySelector('.table-end-game')
    const retry = document.getElementById('retry')
    const setZero = document.getElementById('set-zero')

    //boucle pour ajouter le coup
    blockList.forEach(function (block) {
        block.addEventListener('click', function (e) {
            if (block.textContent == '' && win.textContent == "") {
                block.textContent = player
                lastMove[0] = player
                lastMove[1] = block.getAttribute('id')

                if (checkWin(lastMove)) {
                    win.textContent = lastMove[0] + " gagne"
                    win.classList.add('active')
                    endGame.classList.add('active')
                    incrementScore(lastMove[0])
                } else if (checkLose()) {
                    win.textContent = "Perdu"
                    win.classList.add('active')
                    endGame.classList.add('active')
                }

                changePlayer()
            }
        })
    })

    // Vérifie si la partie gagné

    checkWin = function (lastMove) {
        actualPlayer = lastMove[0]
        move = lastMove[1]
        switch (move) {
            case '0': 
                if (checkBlock('1') == checkBlock('2') && checkBlock('1') == actualPlayer ||
                    checkBlock('4') == checkBlock('8') && checkBlock('4') == actualPlayer ||
                    checkBlock('3') == checkBlock('6') && checkBlock('3') == actualPlayer) {
                    return true
                }
                return false
            case '1':
                if (checkBlock('0') == checkBlock('2') && checkBlock('0') == actualPlayer ||
                    checkBlock('4') == checkBlock('7') && checkBlock('4') == actualPlayer) {
                    return true
                }
                return false
            case '2':
                if (checkBlock('0') == checkBlock('1') && checkBlock('0') == actualPlayer ||
                    checkBlock('5') == checkBlock('8') && checkBlock('5') == actualPlayer ||
                    checkBlock('4') == checkBlock('6') && checkBlock('4') == actualPlayer) {
                    return true
                }
                return false
            case '3':
                if (checkBlock('0') == checkBlock('6') && checkBlock('0') == actualPlayer ||
                    checkBlock('4') == checkBlock('5') && checkBlock('4') == actualPlayer) {
                    return true
                }
                return false
            case '4':
                if (checkBlock('3') == checkBlock('5') && checkBlock('3') == actualPlayer ||
                    checkBlock('1') == checkBlock('7') && checkBlock('1') == actualPlayer ||
                    checkBlock('0') == checkBlock('8') && checkBlock('0') == actualPlayer ||
                    checkBlock('2') == checkBlock('6') && checkBlock('2') == actualPlayer) {
                    return true
                }
                return false
            case '5':
                if (checkBlock('2') == checkBlock('8') && checkBlock('2') == actualPlayer ||
                    checkBlock('3') == checkBlock('4') && checkBlock('3') == actualPlayer) {
                    return true
                }
                return false
            case '6':
                if (checkBlock('0') == checkBlock('3') && checkBlock('0') == actualPlayer ||
                    checkBlock('7') == checkBlock('8') && checkBlock('7') == actualPlayer ||
                    checkBlock('2') == checkBlock('4') && checkBlock('2') == actualPlayer) {
                    return true
                }
                return false
            case '7':
                if (checkBlock('1') == checkBlock('4') && checkBlock('1') == actualPlayer ||
                    checkBlock('6') == checkBlock('8') && checkBlock('6') == actualPlayer) {
                    return true
                }
                return false
            case '8':
                if (checkBlock('6') == checkBlock('7') && checkBlock('6') == actualPlayer ||
                    checkBlock('2') == checkBlock('5') && checkBlock('2') == actualPlayer ||
                    checkBlock('0') == checkBlock('4') && checkBlock('0') == actualPlayer) {
                    return true
                }
                return false
            default:
                console.log('erreur')
                return false
        }
    }

    // Vérifie si la partie est perdu

    checkLose = function () {
        let isLose = true
        blockList.forEach(function (block) {
            if (block.textContent == '') {
             isLose = false
            }
        })
        
        return isLose
    }

    // Changer de joueur

    changePlayer = function () {
        if (player == 'X') {
            player = 'O'
        } else {
            player = 'X'
        }
    }

    // Contenu du block
    
    checkBlock = function (num) {
        return document.getElementById(num).textContent
    }

    // Incrementation point

    incrementScore = function (joueur) {
        document.getElementById('score-' + joueur).textContent = parseInt(document.getElementById('score-' + joueur).textContent) + 1
    }

    //remise à zéro des score

    setZero.addEventListener('click', function (e) {
        document.getElementById('score-X').textContent = 0
        document.getElementById('score-O').textContent = 0
        clear()
    })

    //Rejouer

    retry.addEventListener('click', function (e) {
        clear()
    })


    //Clear

    clear = function () {
        blockList.forEach(function (block) {
            block.textContent = ''
        })
        document.getElementById('div-win').textContent = ""
        document.getElementById('div-win').classList.remove('active')
        player = 'X'
        endGame.classList.remove('active')
    }

}