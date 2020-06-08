const firstName = "Tomek";
const age = 28;

console.log("Elo mordo!");
console.log(`Nazywam się ${name} i mam ${age} lat.`);

const navigationLink = document.querySelector('.navigation__link--js');

console.log(navigationLink.innerHTML);

navigationLink.innerHTML = "Elo elo";

console.log(navigationLink.innerHTML);

function greet(firstName, age) {
    console.log(`Siema, nazywam się ${firstName} i mam ${age}.`)
}

const greetNew = (firstName, age) =>{
        console.log(`Elo, nazywam się ${firstName} i mam ${age}.`)
}
greet(firstName, age)
greetNew(firstName, age)

const human = {
    firstName: 'Tomek',
    age: 28,
greet: (firstName, age) =>{
console.log(`Eluwina, nazywam się ${firstName} i mam ${age}.`)
}
}
console.log(human.age)
human.greet('Ada', 26)

const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', () => {
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--open')
})