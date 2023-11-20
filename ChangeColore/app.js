/* ⁃ в верстке будет квадрат пустой, при клике на квадрат он должен закраситься (background-color) рандомным цветом, 
также посередине квадрата должен появиться код этого цвета (например, если квадрат закрасился черным цветом, то код #000000). 
Эта логика должна отрабатывать каждый раз при клике на квадрат. 

для рандомной генерации цвета используйте Math.random() , прочитайте информацию в гугле*/

const div = document.querySelector('.block')
const btn = document.querySelector('.click')
const text = document.querySelector('.text')

btn.addEventListener('click', () => {
    div.style.backgroundColor = generateColor()
    function generateColor() {
        return text.innerHTML = ('#' + Math.floor(Math.random() * 16777215).toString(16))
    }
})

/*
Почему 16777215: каждый параметр (красный, зеленый и синий) определяет интенсивность цвета со значением от 0 до 255. 
Это означает, что существует 256 x 256 x 256 = 16777216 возможных цветов.
toString(16) - так как для обозначение цвета используется 16ричная система счисления. Знак # используют как указку, что это 16ная система счисления.
*/

//codewars видмо должны разворачиваться слова только из 5 букв и больше
// const spinWords = (str) => {
//     return str.split('').reverse().join('')
// }

function sumTwoSmallestNumbers(numbers) {
    let get = numbers.sort((a, b) => a - b).splice(0, 2).reduce((a, b) => a + b)
    //console.log(get)
    return get
}
sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453])




//str
//     .split('')
//     .map(word => word.split('').reverse().join(''))
//     .join(' ');






// function factorial(n) {
//     if (n === 1) {
//         return 1
//     } else {
//         return n * factorial(n - 1)
//     }
// }