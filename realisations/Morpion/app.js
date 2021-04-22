window.onload = function () {
    let player = 'x'
    let lastMove = []
    let winTab = []
    
    const xSvg = "<svg xmlns='http://www.w3.org/2000/svg' width='63' height='63' viewBox='0 0 105.131 105.131'><g id='Croix' transform='translate(-907.55 -555.55)'><line id='Ligne_1' data-name='Ligne 1' y2='134.677' transform='translate(1007.731 560.5) rotate(45)' fill='none' stroke='#e46e20' stroke-width='14' /><line id='Ligne_2' data-name='Ligne 2' y2='134.677' transform='translate(912.5 560.5) rotate(-45)' fill='none' stroke='#e46e20' stroke-width='14' /></g></svg>"
    const oSvg = "<svg xmlns='http://www.w3.org/2000/svg' width='63' height='63' viewBox='0 0 128 128'><g id='Cercle' transform='translate(-896 -346)'><g id='Ellipse_1' data-name='Ellipse 1' transform='translate(896 346)' fill='none' stroke='#1fb157' stroke-width='14'><circle cx='64' cy='64' r='64' stroke='none' /><circle cx='64' cy='64' r='57' fill='none'/></g></g></svg >"
                  

    const blockList = document.querySelectorAll('td')
    const win = document.getElementById('div-win')
    const retry = document.getElementById('retry')

    //boucle pour ajouter le coup
    blockList.forEach(function (block) {
        block.addEventListener('click', function (e) {
            if ((block.dataset.player == undefined || block.dataset.player == "") && win.textContent == "") {
                if (player == 'x') {
                    block.innerHTML = xSvg
                } else {
                    block.innerHTML = oSvg
                }
                block.dataset.player = player
                lastMove[0] = player
                lastMove[1] = block.getAttribute('id')

                if (checkWin(lastMove)) {
                    console.log(winTab)
                    setWinStyle(winTab)
                    win.innerHTML = "<span id='player-win'>" + lastMove[0] + "</span>" + " Gagne!"
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
                if (checkBlock('1') == checkBlock('2') && checkBlock('1') == actualPlayer) {
                    winTab = ['0', '1', '2']
                    return true
                }
                if (checkBlock('4') == checkBlock('8') && checkBlock('4') == actualPlayer) {
                    winTab = ['0', '4', '8']
                    return true
                }
                if (checkBlock('3') == checkBlock('6') && checkBlock('3') == actualPlayer) {
                    winTab = ['0', '3', '6']
                    return true
                }
                return false
            case '1':
                if (checkBlock('0') == checkBlock('2') && checkBlock('0') == actualPlayer) {
                    winTab = ['1', '0', '2']
                    return true
                }
                if (checkBlock('4') == checkBlock('7') && checkBlock('4') == actualPlayer) {
                    winTab = ['1', '4', '7']
                    return true
                }
                return false
            case '2':
                if (checkBlock('0') == checkBlock('1') && checkBlock('0') == actualPlayer) {
                    winTab = ['2', '0', '1']
                    return true
                }
                if (checkBlock('5') == checkBlock('8') && checkBlock('5') == actualPlayer) {
                    winTab = ['2', '5', '8']
                    return true
                }
                if (checkBlock('4') == checkBlock('6') && checkBlock('4') == actualPlayer) {
                    winTab = ['2', '4', '6']
                    return true
                }
                return false
            case '3':
                if (checkBlock('0') == checkBlock('6') && checkBlock('0') == actualPlayer) {
                    winTab = ['3', '0', '6']
                    return true
                }
                if (checkBlock('4') == checkBlock('5') && checkBlock('4') == actualPlayer) {
                    winTab = ['3', '4', '5']
                    return true
                }
                return false
            case '4':
                if (checkBlock('3') == checkBlock('5') && checkBlock('3') == actualPlayer) {
                    winTab = ['4', '3', '5']
                    return true
                }
                if (checkBlock('1') == checkBlock('7') && checkBlock('1') == actualPlayer) {
                    winTab = ['4', '1', '7']
                    return true
                }
                if (checkBlock('0') == checkBlock('8') && checkBlock('0') == actualPlayer) {
                    winTab = ['4', '0', '8']
                    return true
                }
                if (checkBlock('2') == checkBlock('6') && checkBlock('2') == actualPlayer) {
                    winTab = ['4', '2', '6']
                    return true
                }
                return false
            case '5':
                if (checkBlock('2') == checkBlock('8') && checkBlock('2') == actualPlayer) {
                    winTab = ['5', '2', '8']
                    return true
                }
                if (checkBlock('3') == checkBlock('4') && checkBlock('3') == actualPlayer) {
                    winTab = ['5', '3', '4']
                    return true
                }
                return false
            case '6':
                if (checkBlock('0') == checkBlock('3') && checkBlock('0') == actualPlayer) {
                    winTab = ['6', '0', '3']
                    return true
                }
                if (checkBlock('7') == checkBlock('8') && checkBlock('7') == actualPlayer) {
                    winTab = ['6', '7', '8']
                    return true
                }
                if (checkBlock('2') == checkBlock('4') && checkBlock('2') == actualPlayer) {
                    winTab = ['6', '2', '4']
                    return true
                }
                return false
            case '7':
                if (checkBlock('1') == checkBlock('4') && checkBlock('1') == actualPlayer) {
                    winTab = ['7', '1', '4']
                    return true
                }
                if (checkBlock('6') == checkBlock('8') && checkBlock('6') == actualPlayer) {
                    winTab = ['7', '6', '8']
                    return true
                }
                return false
            case '8':
                if (checkBlock('6') == checkBlock('7') && checkBlock('6') == actualPlayer) {
                    winTab = ['8', '6', '7']
                    return true
                }
                if (checkBlock('2') == checkBlock('5') && checkBlock('2') == actualPlayer) {
                    winTab = ['8', '2', '5']
                    return true
                }
                if (checkBlock('0') == checkBlock('4') && checkBlock('0') == actualPlayer) {
                    winTab = ['8', '0', '4']
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
            if (block.dataset.player == '' || block.dataset.player === undefined) {
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

    //Set Style Case Gagnante
    setWinStyle = function (tab) {
        tab.map(function (item) {
            document.getElementById(item).classList.add('td-win')
        }) 
    }
    //Unset Style Case Gagnante
    unsetWinStyle = function () {
        document.querySelectorAll('.td-win').forEach(function (item) {
            item.classList.remove('td-win')
        })
    }

    //Rejouer

    retry.addEventListener('click', function (e) {
        clear()
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
        unsetWinStyle()
    }

}