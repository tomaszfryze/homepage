const name = "Tomek";
const age = 28;

console.log("Elo mordo!");
console.log(`Nazywam się ${name} i mam ${age} lat.`);

const navigationLink = document.querySelector('.navigation__link--js');

console.log(navigationLink.innerHTML);

navigationLink.innerHTML = "Elo elo";

console.log(navigationLink.innerHTML);
