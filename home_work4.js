//Напишите функцию любого вида, которая принимает строку и переворачивает ее, например hello -> olleh
let expand = (str) => {
    let array = Array.from(str);
    let reverseArr = array.reverse();
    let toStr = reverseArr.join()
    return console.log(toStr)
}
expand('hello');


//Напишите функцию, которая принимает неограниченное количество чисел и выводит их среднюю арифметическую
var average = (numb) => {
    var sum = 0;
    // var getAverage;
    for (var i = 0; i < numb.length; i++) {
        sum += numb[i]
    }
    return console.log(sum / numb.length)
}
average([1, 2, 3, 4, 4])


/*дан массив [«name», «John», «lastname», «Black», «age», «23»].
Из этого массива нужно получить объект, где ключом будет name, а значение John и так с остальными данными. Все нужно сделать через цикл конечно же)*/
let arrayToTr = ['name', 'John', 'lastname', 'Black', 'age', '23']
let objecToTr = {}

// for (i = 0; i < arrayToTr.length; i++) {
//     if (arrayToTr[i] === 'name') {

//     }
// }


/*Дан список с разными типами данных, Например : [null, 123, undefined, null, "qwerty", 34, 65, undefined, null, null, 43, "aerg", "пкцйк», null, ‘uioo’]. 
Вам надо одинаковые типы данных объединить в отдельный массив. То есть в конечном результате у вас будет несколько массивов c одинаковыми типами данных внутри. 
После отсортируйте массивы от меньшего к большему, то есть на первом месте будет массив с наименьшим количеством данных внутри.*/
var arrayOfMix = [null, 123, undefined, null, 'qwerty', 34, 65, undefined, null, null, 43, 'aerg', 'пкцйк', null, 'uioo']

var arrayOfStr = [];
var arrayNum = [];
var arrayObg = [];
var arrayUndF = [];

for (i = 0; i < arrayOfMix.length; i++) {
    if (typeof arrayOfMix[i] === 'string') {
        arrayOfStr.push(arrayOfMix[i])
    } else if (Number.isInteger(arrayOfMix[i])) {
        arrayNum.push(arrayOfMix[i])
    } else if (arrayOfMix[i] === null) {
        arrayObg.push(arrayOfMix[i])
    } else {
        arrayUndF.push(arrayOfMix[i])
    }
}

console.log(arrayUndF)
console.log(arrayNum)
console.log(arrayOfStr)
console.log(arrayObg)



