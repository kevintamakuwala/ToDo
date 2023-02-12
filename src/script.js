const input = document.getElementById('input-data');
const add = document.getElementById('add');
const tasks = document.getElementById('tasks');
const container = document.getElementById('container');


add.addEventListener('click', () => {
    const val = input.value;

    if (val != '') {

        const node = document.createElement('div');
        node.classList.add('item');


        const checkbox = document.createElement('i');
        const trash = document.createElement('button');
        trash.classList.add("delete");
        checkbox.classList.add("item-completed");
        checkbox.classList.add("fa-solid");
        checkbox.classList.add("fa-trash-can");


        const inputText = document.createElement("div");
        inputText.innerText = val;
        inputText.classList.add("item-description");


        node.appendChild(inputText);
        trash.appendChild(checkbox);
        node.appendChild(trash);
        tasks.prepend(node);

        input.value = '';

        var current_tasks = document.querySelector('.delete');

        current_tasks.onclick=function(){
            current_tasks.parentElement.remove();
        };

    }
    else
        alert("Please enter an item!!!");
});

