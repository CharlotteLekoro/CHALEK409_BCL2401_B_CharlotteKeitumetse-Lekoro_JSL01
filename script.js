const itemList = document.getElementById("itemList");
const newItemInput = document.getElementById("newItem");
const addButton = document.getElementById("addButton");

let items = []; 

// Function to add a new item to the list
function addNewItem(item) {
  items.push(item); // Add item to the items array

  // Create a new list item element
  const listItem = document.createElement("li");
  listItem.innerText = item;
 
  itemList.appendChild(listItem);

  newItemInput.value = "";
}

addButton.addEventListener("click", () => {
  const newItem = newItemInput.value.trim(); 

  if (newItem) {
    addNewItem(newItem);
  }
});
