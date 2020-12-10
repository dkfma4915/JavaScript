/* 
function sayHello(potato){
    return `Hello ${potato}`;
}

const greetNicolas = sayHello("Nicolas");
console.log(greetNicolas)

const calculator = {
    plus: function(a,b){
        return a + b;
    }
}
const plus = calculator.plus(5,5);
console.log(plus)
*/
const title = document.querySelector("#title");

const clickedClass = "clicked";

function handleClick(){
    const currentClass = title.className;
    if(currentClass !== clickedClass){
        title.classList.add(clickedClass);
    } else {
        title.classList.remove(clickedClass);
    }
}

function init(){
    title.addEventListener("click",handleClick);
}
init();
