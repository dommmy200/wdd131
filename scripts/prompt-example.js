const buttonA = document.querySelector("#button-A");
const headingA = document.querySelector("#heading-A");

const promptMe = function() {
    buttonA.onclick = () => {
        const name = prompt("What is your name?");
        alert(`Hello ${name}, nice to see you!`);
        headingA.textContent = `Welcome ${name}`;
      };
}
promptMe();