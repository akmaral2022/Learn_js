//todolist

const input = document.querySelector('#input')
const createButton = document.querySelector("#create_button")
const todoList = document.querySelector('#todo_list')



const createTodo = () => {
    //1
    const div = document.createElement('div')
    const divButton = document.createElement('div')
    const text = document.createElement('h3')
    const deleteButton = document.createElement('button')
    const editButton = document.createElement('button')

    //2
    div.setAttribute('class', 'block_text')
    divButton.setAttribute('class', 'div_button')
    deleteButton.setAttribute('class', 'deleteButton')
    editButton.setAttribute('class', 'editButton')

    text.innerHTML = input.value
    deleteButton.onclick = () => {
        div.remove()
    }

    deleteButton.innerText = 'DELETE'
    editButton.innerText = 'EDIT'

    divButton.append(deleteButton, editButton)
    div.append(text, divButton)

    todoList.prepend(div)   //prepend()- добавляет в начало


}

createButton.onclick = () => {
    if (input.value === '') {
        alert('Введите текст')
    } else {

        createTodo()
        input.value = ''

    }
}

/* функция будет принимать неограниченное кол-во названия книг (абсолютно любых). 
В результате в новом массиве должны вывестись только те книги, в названиях которых есть русская буква н и Н. 
Можете использовать методы, можете циклом пройтись */
let arrayStartByN = []
function getNameOfBooks(...names) {
    arrayStartByN.push(names.filter(name => name.toLowerCase().includes('н')))
    console.log(arrayStartByN)
    // arrayStartByN.push(names.forEach(name => name.toLowerCase().includes('н')))
    // console.log(arrayStartByN)

}

getNameOfBooks('Анна Каренина', 'Сойка пересмешница', 'Онегин', '451 градус по Фарингейту', 'Мастер и Маргарита')
getNameOfBooks('Симгмалион', 'Мертвые души', 'Элегантность ежика', 'Дубровский', 'Ни-сы')



