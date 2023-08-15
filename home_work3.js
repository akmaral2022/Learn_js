//задание 1

var arrayNumbs = [123, 234, 256, 345, 457, 543, 67, 55, 23, 28, 50].map(function (arrayNumbs) {
    return arrayNumbs.toString()
}
)
//console.log(arrayNumbs)
var newArray = []
for (i = 0; i < arrayNumbs.length; i++) {
    if (arrayNumbs[i][0] === '2' || arrayNumbs[i][0] === '5') {

        var arrayOfnumbs = arrayNumbs[i]
        var toNumber = parseInt(arrayOfnumbs)
        //console.log(arrayOfnumbs)
        newArray.push(toNumber)

    }
}
console.log(newArray)




// задание 2
function getDataType(argument) {
    console.log(typeof argument)
}
getDataType(2)

// задание 3
//Дан список тегов  ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol’, ‘br’]. Вам нужно посчитать каких тегов сколько штук.  Обязательные условия:
//1. Конечный результат должен вывестись как объект {}, где ключ - это сам тег, а значение - это количество сколько раз этот тег встречается в массиве.

let arrayOfTags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br']
let objectOfTags = {}

//console.log(arrayOfTags)

for (tag of arrayOfTags) {
    if (objectOfTags[tag]) {
        objectOfTags[tag] += 1

    } else {
        objectOfTags[tag] = 1
    }
}
console.log(objectOfTags)

//    for (i = 0; i < arrayOfTags.length; i++) {
if (arrayOfTags[i] === 'li') {
    objectOfTags.push()
}
//    }
