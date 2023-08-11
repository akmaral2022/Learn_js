let bornDay = prompt("Введите день вашего рождения");
let bornMonth = prompt("Введите номер месяца вашего рождения");
if ((bornDay >= 21 && bornDay <= 31 && bornMonth == 3) || (bornDay <= 19 && bornDay >= 1 && bornMonth == 4)) {
    console.log("Ваш знак зодиака Овен")
} else if ((bornDay >= 20 && bornDay <= 30 && bornMonth == 4) || (bornDay <= 20 && bornDay >= 1 && bornMonth == 5)) {
    console.log("Ваш знак зодиака Телец")
} else if ((bornDay >= 21 && bornDay <= 31 && bornMonth == 5) || (bornDay <= 20 && bornDay >= 1 && bornMonth == 6)) {
    console.log("Ваш знак зодиака Близнецы")
} else if ((bornDay >= 21 && bornDay <= 30 && bornMonth == 6) || (bornDay <= 22 && bornDay >= 1 && bornMonth == 7)) {
    console.log("Ваш знак зодиака Рак")
} else if ((bornDay >= 23 && bornDay <= 31 && bornMonth == 7) || (bornDay <= 22 && bornDay >= 1 && bornMonth == 8)) {
    console.log("Ваш знак зодиака Лев")
} else if ((bornDay >= 23 && bornDay <= 31 && bornMonth == 8) || (bornDay <= 22 && bornDay >= 1 && bornMonth == 9)) {
    console.log("Ваш знак зодиака Дева")
} else if ((bornDay >= 23 && bornDay <= 30 && bornMonth == 9) || (bornDay <= 22 && bornDay >= 1 && bornMonth == 10)) {
    console.log("Ваш знак зодиака Весы")
} else if ((bornDay >= 23 && bornDay <= 31 && bornMonth == 10) || (bornDay <= 21 && bornDay >= 1 && bornMonth == 11)) {
    console.log("Ваш знак зодиака Скорпион")
} else if ((bornDay >= 22 && bornDay <= 30 && bornMonth == 11) || (bornDay <= 21 && bornDay >= 1 && bornMonth == 12)) {
    console.log("Ваш знак зодиака Стрелец")
} else if ((bornDay >= 22 && bornDay <= 31 && bornMonth == 12) || (bornDay <= 19 && bornDay >= 1 && bornMonth == 1)) {
    console.log("Ваш знак зодиака Козерог")
} else if ((bornDay >= 20 && bornDay <= 31 && bornMonth == 1) || (bornDay <= 18 && bornDay >= 1 && bornMonth == 2)) {
    console.log("Ваш знак зодиака Водолей")
} else if ((bornDay >= 19 && bornDay <= 29 && bornMonth == 2) || (bornDay <= 20 && bornDay >= 1 && bornMonth == 3)) {
    console.log("Ваш знак зодиака Рыбы")
} else {
    alert("Возможно вы ввели не верные данные")
}

