function colorMyName() {
    const h1 = document.getElementById('titled');
    const myName = 'Abah D. Odeh';
    const myCourse = "WDD 131 - Dynamic Web Fundamentals - ";
    const spanElement = document.createElement("span");
    spanElement.textContent = myName;
    spanElement.style.color = "yellow";
    const myTitle = myCourse + spanElement.outerHTML;
    h1.innerHTML = myTitle;
}

colorMyName();