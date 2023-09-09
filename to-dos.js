function loadToDos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => displayToDos(data))
}

function displayToDos(toDos) {
    // console.log(toDos);

    // Get the container
    const todoContainer = document.getElementById('todo-container');
    
    for(const toDo of toDos){
        // Make the child element
        const toDoDiv = document.createElement('div');
        // Set innerText or innerHTML
        toDoDiv.innerHTML = 
        `
            <h3>title: ${toDo.title}</h3>
            <p>User: ${toDo.userId}</p>
        `;
        
        // appendChild
        todoContainer.appendChild(toDoDiv);
    }
}

loadToDos();