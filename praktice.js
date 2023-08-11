// let example = 'A\K';
// let exampleIter = example[Symbol.iterator]();
// console.log(exampleIter.next().value);
// console.log(exampleIter.value)

// let name = "Bob and Alice";
// console.log(name.includes('and', 4))

// function multiply(num1, num2) {
//     var sum = num1 * num2;
//     return sum;
// }
/*document.querySelector("html").onclick = function () {    //связь с html документом через onclick
    alert("Ouch! Stop pocking me!")
}

function countRabbits() {
    for (let i = 1; i <= 3; i++) {
        alert("Кролик номер " + i)
    }
}
*/


let myImage = document.querySelector("img");
myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "image/1.png") {
        myImage.setAttribute("src", "image/1.png")
    } else {
        myImage.setAttribute("src", "image/2.png")
    }
}