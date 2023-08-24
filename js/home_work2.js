// 1 задание
let starbks = {
    tea: {
        sweet_tea1: 'strawberry tea',
        sweet_tea2: 'sea buckthorn tea'
    },
    coffee: {
        latte1: 'vanilla',
        latte2: 'ice latte',
        latte3: 'macchiato',
        cappuccino: 'classic',
        macchiato: 'classic',
        macchiato: 'ice macchiato',
        espresso: 'classic',
        espresso: 'ice espresso'
    }
}
console.log(starbks)

// 2 задание
let arrayOfCities = ['Bishkek', 'Los Angeles', 'Chicago', 'New York', 'Houston, Dallas', 'Philadelphia', 'Seattle']
for (let i = 0; i < arrayOfCities.length; i++) {
    if (arrayOfCities[i].length > 7) {
        console.log(`В названии данного города больше 7 символов: ${arrayOfCities[i]}`)
    } else {
        console.log(`Не вошли в список: ${arrayOfCities[i]}`)
    }
}

// 3 задание
let dayOfWeek = Number(prompt('Введите число от 1 до 7 включительно'))
switch (dayOfWeek) {
    case 1:
        alert('Понедельник')
        break
    case 2:
        alert('Вторник')
        break
    case 3:
        alert('Среда')
        break
    case 4:
        alert('Четверг')
        break
    case 5:
        alert('Пятница')
        break
    case 6:
        alert('Суббота')
        break
    case 7:
        alert('Воскресенье')
        break
    default:
        alert('Таконо дня нет(.')

}