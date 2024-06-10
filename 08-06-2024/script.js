
//selecting all  elements in javascript
let add = document.getElementById("add");

let remove = document.getElementById("remove");

let reset = document.getElementById("reset");

let userinput = document.getElementById("userinput")

let counter = document.getElementById("counter");

let container = document.querySelector(".container");

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeRandomColor() {
    container.style.backgroundColor = getRandomColor();
}

//Adding Event listeners

add.addEventListener("click", function () {
    let value = Number(userinput.value); //Coverting String to number
    let count = Number(counter.textContent);  //coverting string to number
    counter.textContent = value + count;  //Then performing operation
    changeRandomColor();
    
})

remove.addEventListener("click", function () {
    counter.textContent -= userinput.value;
    changeRandomColor();
    
})

reset.addEventListener("click", function () {
    counter.textContent = 0;
    userinput.value="";
    changeRandomColor();
    
}) 