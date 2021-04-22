window.onload = function () {
    const buttonList = document.querySelectorAll('.btn')
    const input = document.querySelector('input')
    const result = document.querySelector('.result')

    buttonList.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            traitement(e.target.textContent)
        })
    })

    window.addEventListener('keydown', function (e) {

        traitement(e.keyCode)
    })

    traitement = function (element) {
        switch (element) {
            case 67:
            case 'C':
                input.value = ''
                result.textContent = ''
                break;
            case 97:
            case '1':
                increment('1')
                break;
            case 98:
            case '2':
                increment('2')
                break;
            case 99:
            case '3':
                increment('3')
                break;
            case 100:
            case '4':
                increment('4')
                break;
            case 101:
            case '5':
                increment('5')
                break;
            case 102:
            case '6':
                increment('6')
                break;
            case 103:
            case '7':
                increment('7')
                break;
            case 104:
            case '8':
                increment('8')
                break;
            case 105:
            case '9':
                increment('9')
                break;
            case 96:
            case '0':
                increment('0')
                break;
            case 107:
            case '+':
                increment('+')
                break;
            case 109:
            case '-':
                increment('-')
                break;
            case 111:
            case '/':
                increment('/')
                break;
            case 106:
            case '*':
                increment('*')
                break;
            case 110:
            case '.':
                increment('.')
                break;
            case 13:
            case '=':
                try {
                    result.textContent = eval(input.value)
                } catch (e) {
                    try {
                        input.value = input.value.substring(0, input.value.length - 1)
                        result.textContent = eval(input.value)
                    } catch (e) {
                        alert('Une erreur a été détecter dans votre calcul')
                    }
                }
                break;
            case '←':
            case 8:
                input.value = input.value.substring(0, input.value.length - 1)
                break;
            default: input.value = "Erreur";
        }
    }


    increment = function (newValue) {
        input.value += newValue
    }

}