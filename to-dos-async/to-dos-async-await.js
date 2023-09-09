const loadToDos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json(); //json() is like JSON.parse
    displayToDos(data);
}

const displayToDos = async (toDos) => {
    // console.log(toDos);

    // Get the container
    const todoContainer = document.getElementById('todo-container');

    /* for (const toDo of toDos) {
        // Make the child element
        const toDoDiv = document.createElement('div');
        // Set innerText or innerHTML
        toDoDiv.innerHTML = `
            <h3>title: ${toDo.title}</h3>
            <p>User: ${toDo.userId}</p>
        `;

        // appendChild
        todoContainer.appendChild(toDoDiv);
    } */

    toDos.forEach(toDo => {
        // Make the child element
        const toDoDiv = document.createElement('div');
        // Set innerText or innerHTML
        toDoDiv.innerHTML = `
            <h3>title: ${toDo.title}</h3>
            <p>User: ${toDo.userId}</p>
        `;

        // appendChild
        todoContainer.appendChild(toDoDiv);
    });
    
}

loadToDos();