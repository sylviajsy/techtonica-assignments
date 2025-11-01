// Add a defined new element to ingredient list
const list = document.getElementById('ingredient-list');
const newli = document.createElement('li');
newli.innerHTML = 'Lots of love';
list.appendChild(newli);

// Add a check mark as an element to a list
const firstDiv = document.getElementById('left')

// creating checkbox item
let page_checkbox = document.createElement('input');
// Assigning attributes to created checkbox
page_checkbox.type = "checkbox";
page_checkbox.name = "name";
page_checkbox.value = "value";
page_checkbox.id = "id";
page_checkbox.style.marginRight = "8px";

// create label for checkbox
var label = document.createElement("label");
label.htmlFor = "id";
label.appendChild(document.createTextNode("Do you like this recipe?"));

// appending the checkbox and lable the div
firstDiv.append(page_checkbox);
firstDiv.append(label);

// label.className = "checked";

page_checkbox.addEventListener("change", ()=>{
    page_checkbox.addEventListener("change", () => {
  label.classList.toggle("checked", page_checkbox.checked);
});

})

// Add checkbox to whole ingredient list
document.addEventListener("DOMContentLoaded", () =>{
    const items = document.querySelectorAll("#ingredient-list li");
    items.forEach((item, index)=> {
        let ingredient_checkbox = document.createElement('input');
        ingredient_checkbox.type = "checkbox";
        ingredient_checkbox.value = "value";
        ingredient_checkbox.id = `ingredient-${index}`;
        ingredient_checkbox.style.marginRight = "8px";

        ingredient_checkbox.addEventListener("change", () => {
                item.classList.toggle("checked", ingredient_checkbox.checked);
        })
        // click ingredient item will also check checkbox
        item.addEventListener("click",(e)=>{
            item.classList.toggle("checked", item.checked);
            if (e.target === ingredient_checkbox) return;
            ingredient_checkbox.checked = !ingredient_checkbox.checked;
            item.classList.toggle("checked", ingredient_checkbox.checked);
        })
        item.prepend(ingredient_checkbox);
    })
 })

// Add customized ingredient
// const list = document.getElementById('ingredient-list');
const addBtn = document.getElementById("add-btn");
const newInput = document.getElementById("new-ingredient");

addBtn.addEventListener("click",()=>{
    if (!newText) return;
    // Add new customized item
    const newli = document.createElement("li");
    newli.innerHTML = newText;
    list.appendChild(newli);

    // Add checkbox to the item
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.marginRight = "8px";

    checkbox.addEventListener("change", () => {
      newli.classList.toggle("checked", checkbox.checked);
    });
    newli.prepend(checkbox);
    // Clear input
    newInput.value = "";
})