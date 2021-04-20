window.onload = function () {
    let player = 'x'
    let lastMove = []
    
    const xSvg = "<svg xmlns='http://www.w3.org/2000/svg' width='105.131' height='105.131' viewBox='0 0 105.131 105.131'><g id='Croix' transform='translate(-907.55 -555.55)'><line id='Ligne_1' data-name='Ligne 1' y2='134.677' transform='translate(1007.731 560.5) rotate(45)' fill='none' stroke='#e46e20' stroke-width='14' /><line id='Ligne_2' data-name='Ligne 2' y2='134.677' transform='translate(912.5 560.5) rotate(-45)' fill='none' stroke='#e46e20' stroke-width='14' /></g></svg>"
    const oSvg = "<svg xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 128 128'><g id='Cercle' transform='translate(-896 -346)'><g id='Ellipse_1' data-name='Ellipse 1' transform='translate(896 346)' fill='none' stroke='#1fb157' stroke-width='14'><circle cx='64' cy='64' r='64' stroke='none' /><circle cx='64' cy='64' r='57' fill='none'/></g></g></svg >"
                  


    const blockList = document.querySelectorAll('td')
    const win = document.getElementById('div-win')
    const retry = document.getElementById('retry')

    //boucle pour ajouter le coup
    blockList.forEach(function (block) {
        block.addEventListener('click', function (e) {
            console.log(block.dataset.player)
            if (block.textContent == '' && win.textContent == "") {
                if (player == 'x') {
                    block.innerHTML = xSvg
                } else {
                    block.innerHTML = oSvg
                }
                block.dataset.player = player
                lastMove[0] = player
                lastMove[1] = block.getAttribute('id')

                if (checkWin(lastMove)) {
                    win.textContent = lastMove[0] + " Gagne !"
                    win.classList.add('active')
                    retry.classList.add('active')
                } else if (checkLose()) {
                    win.textContent = "Perdu"
                    win.classList.add('active')
                    retry.classList.add('active')
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
            if (block.dataset.player == '') {
             isLose = false
            }
        })
        
        return isLose
    }

    // Changer de joueur

    changePlayer = function () {
        if (player == 'x') {
            player = 'o'
        } else {
            player = 'x'
        }
    }

    // Contenu du block
    
    checkBlock = function (num) {
        return document.getElementById(num).dataset.player
    }


    //Rejouer

    retry.addEventListener('click', function (e) {
        clear()
        console.log('clear')
    })


    //Clear

    clear = function () {
        blockList.forEach(function (block) {
            block.innerHTML = '';
            block.dataset.player = '';
        })
        document.getElementById('div-win').textContent = ""
        document.getElementById('div-win').classList.remove('active')
        player = 'x'
        retry.classList.remove('active')
    }

}