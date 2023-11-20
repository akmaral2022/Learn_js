const text = document.querySelector('.text')
const height = getComputedStyle(text, null).height;
text.style.lineHeight = height
console.log(height)