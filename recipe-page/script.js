// Add a defined new element to ingredient list
const list = document.getElementById('ingredient-list');
const newli = document.createElement('li');
newli.innerHTML = 'Lots of love';
list.appendChild(newli);

// Add a check mark as an element to a list
const firstDiv = document.getElementById('ingredient-div')

// creating checkbox item
let checkbox = document.createElement('input');
// Assigning attributes to created checkbox
checkbox.type = "checkbox";
checkbox.name = "name";
checkbox.value = "value";
checkbox.id = "id";

// create label for checkbox
var label = document.createElement("label");
label.htmlFor = "id";
label.appendChild(document.createTextNode("Do you like this recipe?"));

// appending the checkbox and lable the div
firstDiv.append(checkbox);
firstDiv.append(label);