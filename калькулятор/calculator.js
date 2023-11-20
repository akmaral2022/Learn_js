let a = ''
let b = ''
let sign = ''
let finish = false

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const action = ['-', '+', '×', '/']

const out = document.querySelector('.calc-screen p')
function clearAll() {
    a = ''
    b = ''
    sign = ''
    finish = false
}

const btnClear = document.querySelector('.ac')
btnClear.onclick = clearAll

const buttons = document.querySelector('.buttons')

buttons.onclick = (event) => {
    if (!event.target.classList.contains('btn')) return
    if (event.target.classList.contains(btnClear)) return

    out.textContent = ''
    const key = event.target.textContent;
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key
            console.log(a, b, sign);
            out.textContent = a
        } else if (a !== '' && b !== '' && finish) {
            b = key
            finish = false
            out.textContent = b
        } else {
            b += key
            out.textContent = b
        } return
    }
    if (action.includes(key)) {
        sign = key
        out.textContent = sign
        return
    }
    if (key === '=') {
        if (b === '') { b = a }
        switch (sign) {
            case '+':
                a = (+a) + (+b)
                break
            case '-':
                a = a - b
                break
            case '×':
                a = a * b
                break
            case '/':
                if (b === '0') {
                    out.textContent = 'Ошибка'
                }
                a = a / b
                break
        }
        finish = true
        out.textContent = a
        console.log(a, b, sign);
    }



}