const riddles__box = document.querySelectorAll('.riddles__box')

riddles__box.forEach((box) => {
    const answer = box.querySelector('.answer')
    const btn = box.querySelector('.btn')
    const btn2 = box.querySelector('.btn2')
    btn.addEventListener('click', () => {
        answer.classList.add('toggle')
        btn2.classList.add('toBtn2')
        btn.classList.add('toBtn')
    })

    btn2.addEventListener('click', () => {
        answer.classList.toggle('toggle')
        btn2.classList.toggle('toBtn2')
        btn.classList.toggle('toBtn')
    })
})
