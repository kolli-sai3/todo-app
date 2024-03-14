console.log("script is working");
let addButton = document.getElementById("add-button");
let inputField = document.getElementById("text-input");
let ul = document.querySelector("ul");

let liElements = document.querySelectorAll("li");

liElements.forEach((li) => {
  let textElement = li.firstElementChild;
  let text = textElement.textContent;
  let editButton = li.querySelector(".edit-button");
  let deleteButton = li.querySelector(".delete-button");

  editButton.addEventListener("click", () => {
    let input = window.prompt("Enter updated task:", text);
    if (input !== null) {
      text = input;
      textElement.textContent = text;
    }
  });

  deleteButton.addEventListener("click", () => {
    li.remove();
  });
});

addButton.addEventListener("click", () => {
  console.log("add button clicked");
  console.log(inputField.value);
  if (inputField.value === "") {
    alert("enter some value");
    return;
  } else {
    let newLi = document.createElement("li");
    let newSpan = document.createElement("span");
    let newBr = document.createElement("br");
    let dateDiv = document.createElement("div");
    dateDiv.textContent = new Date();

    newLi.appendChild(newSpan);
    newLi.appendChild(newBr);
    newLi.appendChild(dateDiv);
    ul.appendChild(newLi);
    newSpan.textContent = inputField.value;

    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    newLi.appendChild(editButton);

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    newLi.appendChild(deleteButton);

    deleteButton.addEventListener("click", () => {
      newLi.remove();
    });

    editButton.addEventListener("click", () => {
      let updatedTask = prompt("Enter updated task:", newSpan.textContent);
      if (updatedTask !== null) {
        newSpan.textContent = updatedTask;
      }
    });

    inputField.value = "";
  }
});

let hideAllButton = document.getElementById("hide-all");

hideAllButton.addEventListener("change", (e) => {
  console.log(e.target.checked);
  ul.style.display = "block";
  if (e.target.checked) {
    ul.style.display = "none";
  }
});
