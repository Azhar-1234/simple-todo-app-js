// const header = document.getElementById("header1");
// header.innerText = "Hello World!";
// header.style.backgroundColor = "blue";
// header.style.color = "white";
// header.style.fontSize = "30px";
// // console.log(header.textContent);
// // console.log(header.innerText);
// // console.dir(document);
// const items = document.querySelectorAll('.item');

// // for(let i=0;i< items.length;i++){
// //     items[i].style.color = 'red';
// // }
// items.forEach((el)=>{
//     el.style.color = 'red';
// })
// const tagName = document.getElementsByTagName('li');
// const parent  = document.querySelector('.items');
// const grandParent = parent.closest('.incomplete-tasks');
// const vai = parent.previousElementSibling;//<h2 id="header1" class="heading" style="background-color: blue; …white; font-size: 30px;">
// const nijerChotoBon = parent.nextElementSibling;//<h4 class="headingTwo">
// //console.log(parent.children);
// const singleChild = document.querySelector('.item');
// //console.log(singleChild.parentElement);

// const children = parent.querySelectorAll('.item');

// const lastItem = parent.querySelector('.item:nth-child(2)');
// lastItem.style.color = 'green';
// /////////////////Dom Manipulation/////////////////////
// const newDiv = document.createElement('div');
// newDiv.textContent = 'notun div add hoice';
// const zekhaneCreateKorteChai = document.querySelector('.incomplete-tasks');
// zekhaneCreateKorteChai.append(newDiv);
// /////////Event listener//////////
// const headerElement = document.getElementById('header');
// // headerElement.addEventListener('click',(event)=>{
// // console.log(event);
// // });

// // headerElement.addEventListener('dblclick',()=>{
// // console.log('double clicked');

// // })
// const inputElement = document.querySelector('#first_todo');

// // inputElement.addEventListener('keypress', (e) => {
// //     console.log(e);
// // });
// // inputElement.addEventListener('cut', (e) => {
// //     console.log(e);
// // });
// // inputElement.addEventListener('paste', (e) => {
// //     console.log(e);
// // });
// //////form ///////////
// // const formElement = document.querySelector('form');
// // formElement.addEventListener("input",(e) => {
// // e.preventDefault();
// // // console.log(e.target.value);

// // })
////////////////////ToDo Apps/////////////////
/*generate incomplete tasks*/
function completeTask(e) {
    const checkBox = e.target;
    const taskItem = checkBox.parentNode;

    const label = taskItem.querySelector("label");
    const taskName = label.textContent;

    const taskToAdd = generateCompleteTodo(taskName);
    document.querySelector(".complete-list ul").appendChild(taskToAdd);

    taskItem.parentNode.removeChild(taskItem);
}

function deleteTask(e) {
    const taskItem = e.target.parentNode;
    const taskContainer = taskItem.parentNode;

    taskContainer.removeChild(taskItem);
}

// generate incomplete todo
function generateIncompleteTodo(taskName) {
    const listItem = document.createElement("li");
    listItem.classList.add("item");

    const inputItem = document.createElement("input");
    inputItem.setAttribute("type", "checkbox");
    inputItem.onchange = completeTask;

    const label = document.createElement("label");
    label.innerText = taskName;

    listItem.append(inputItem, label);

    return listItem;
}

// generate complete todo
function generateCompleteTodo(taskName) {
    const listItem = document.createElement("li");
    listItem.classList.add("item");

    const button = document.createElement("button");
    button.classList.add("delete");
    button.innerText = "Delete";
    button.onclick = deleteTask;

    listItem.append(taskName, " ", button);

    return listItem;
}

const todoForm = document.querySelector("form");
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskInput = document.querySelector("#new-task");
    const taskName = taskInput.value;

    const listItemToAdd = generateIncompleteTodo(taskName);
    const listContainer = document.querySelector("#items");

    listContainer.appendChild(listItemToAdd);

    taskInput.value = "";
});