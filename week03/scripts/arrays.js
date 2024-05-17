const myThree = ['one', 'two', 'three'];
const ul = document.getElementById("myList");

function ArrayToHtml(myArray) {
    const htmlElement = myArray.map((item) => {
        return `<li>${item}</li>`;
    });
    ul.innerHTML =  htmlElement.join(" ");
}
ArrayToHtml(myThree);