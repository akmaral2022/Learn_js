// реализуйте тот же счетчик, который мы делали на уроке, но другим способом, можете onclick() использовать

let input = document.querySelector('input');
document.querySelector('.increment').onclick = () => {
    input.value = parseInt(++input.value)
}
document.querySelector('.decrement').onclick = () => {
    input.value > 0 ? input.value = parseInt(input.value - 1) : alert('Отрицательное значение не возможно(')
    // if (input.value > 0) {
    //     input.value = parseInt(input.value - 1)
    // } else { alert('Отрицательное значение не возможно(') }
}


/*Реализуйте калькулятор. 
Будет два инпута для ввода двух чисел, будут кнопки +, -, /, * и =. 
При клике на + два числа складываются и так далее. 
Над стилями не заморачивайтесь, главное функционал. 
Постарайтесь сами решить эту задачу, в крайнем случае только обращайтесь к менторам или интернету. */
let input1 = document.getElementById('1')
let input2 = document.getElementById('2')
let calculate__result = document.querySelector('.calculate__result')
document.querySelector('.sum').onclick = () => {
    (parseInt(input1.value) + parseInt(input2.value))
    calculate__result.innerHTML = ('Результат: ' + (parseInt(input1.value) + parseInt(input2.value)))

}
document.querySelector('.difference').onclick = () => {
    calculate__result.innerHTML = ('Результат: ' + (parseInt(input1.value) - parseInt(input2.value)))
}
document.querySelector('.multiplication').onclick = () => {
    calculate__result.innerHTML = ('Результат: ' + (parseInt(input1.value) * parseInt(input2.value)))
}
document.querySelector('.quotient').onclick = () => {
    calculate__result.innerHTML = ('Результат: ' + (parseInt(input1.value) / parseInt(input2.value)))
}




/*⁃ Создать кнопку и навесить на него обработчик событий "click". 
При нажатии на эту кнопку должно появиться диалоговое окно ( promt() ), если что либо ввести в диалоговое окно, 
то введённое значения должно отобразиться в HTML. 
При повторном нажатии должно происходить всё то же самое, но текст который был до этого должна поменяться.*/

// let accept__value = document.querySelector('.accept__value')
// let text = document.querySelector('.text')
// console.log(accept__value)
// document.querySelector('.accept').onclick = () => {
//     text.innerHTML = prompt('Ввести желаемый текст')
// }


let accept__value = document.querySelector('.accept__value')
document.querySelector('.accept').onclick = () => {
    newText.innerHTML = prompt('Ввести желаемый текст')
}
var newText = document.createElement('h1')
newText.setAttribute('class', 'text')
accept__value.append(newText)

// закоментированный код тоже работает




