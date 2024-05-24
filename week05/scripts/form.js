function getCurrentYear() {
    return new Date().getFullYear();
}
function insertDateAndIcon() {
    const iconElement = document.querySelector(".footer");
    const name = document.createElement("span");
    name.setAttribute("class", "my-name");
    name.innerHTML = "Dominic Abah Odeh";
    const nigeria = document.createElement("span");
    nigeria.setAttribute("class", "my-country");
    nigeria.innerHTML = "Nigeria";
  
    const icon = "\u00a9";
    const date = getCurrentYear();
  
    const dateAndIcon = `${icon}${date}`;
    const myCountry = document.createTextNode(" Nigeria");
    const author = "Dominic Abah Odeh";
    const arrows = ` ⤆${author}⤇`;
    name.textContent = arrows;
    iconElement.textContent = dateAndIcon;
    iconElement.appendChild(name);
    iconElement.appendChild(myCountry);
}
const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
};
function getModifiedDate() {
    return new Date(document.lastModified).toLocaleDateString("en-US", options);
}
function insertTextAndModifiedDate() {
    const dateContainer = document.getElementById("lastModified");
  
    // Create a text node with Last Modified Date
    const lastModifiedDate = document.createTextNode("Last Modified Date: ");
  
    // Create a text node with the current date
    const dateTextNode = document.createTextNode(getModifiedDate());
  
    // Append the icon and text node to the container element
    dateContainer.appendChild(lastModifiedDate);
    dateContainer.appendChild(dateTextNode);
}


const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averageRating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averageRating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averageRating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averageRating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averageRating: 5.0
  },
];
insertDateAndIcon();
insertTextAndModifiedDate();

const selectTag = document.getElementById("product");
const populateSelect = () => {
products.forEach((item) => {
  const option = document.createElement("option");
  option.setAttribute("value", `${item.name}`);
  option.textContent = `${item.name.toUpperCase()}`;
  selectTag.appendChild(option);
});
}
populateSelect();

window.addEventListener("DOMContentLoaded", function() {
  const selectElement = document.getElementById("product");
  const firstOption = selectElement.options[0];
  firstOption.disabled = true; // Disable the first option
  selectElement.focus(); // Focus the select element (default focus goes to first non-disabled option)
});