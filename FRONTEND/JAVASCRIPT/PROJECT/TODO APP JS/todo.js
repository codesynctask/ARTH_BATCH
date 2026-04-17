// Elements selection
const toDoCont = document.querySelector("ul");
const createTodoBtn = document.querySelector("button");
const taskNameInput = document.querySelector("input");

let todoData = JSON.parse(localStorage.getItem("todoData")) ?? [];

// CREATE TODO UI 
function createTodoElement(todo, index) {
    let li = document.createElement("li");
    li.setAttribute(
        "class",
        "flex justify-between item-center  p-4 rounded-md shadow-md"
    );

    li.innerHTML = `
        <div class="flex justify-center items-center gap-4">
            <i class="${
                todo.status
                    ? "ri-checkbox-circle-line"
                    : "ri-checkbox-blank-circle-line"
            } text-2xl cursor-pointer"></i>

            <input type="text" value="${todo.name}" 
                class="outline-none bg-transparent"
                readonly
                style="text-decoration:${todo.status ? "line-through" : "none"}"
            />
        </div>

        <div class="flex gap-4">
            <i id="edit" class="ri-edit-line cursor-pointer"></i>
            <i id="delete" class="ri-delete-bin-line cursor-pointer"></i>
        </div>
    `;

    // Elements inside li 
    const checkIcon = li.querySelector("i");
    const editBtn = li.querySelector("#edit");
    const deleteBtn = li.querySelector("#delete");
    const input = li.querySelector("input");

    // COMPLETE TASK 
    checkIcon.addEventListener("click", () => {
        todo.status = !todo.status;

        checkIcon.className = todo.status
            ? "ri-checkbox-circle-line text-2xl cursor-pointer"
            : "ri-checkbox-blank-circle-line text-2xl cursor-pointer";

        input.style.textDecoration = todo.status ? "line-through" : "none";

        updateLocalStorage();
    });

    // EDIT TASK
    editBtn.addEventListener("click", () => {
        input.readOnly = false;
        input.focus();
        input.style.border = "1px solid black";

        input.addEventListener("blur", () => {
            input.readOnly = true;
            input.style.border = "none";
            todo.name = input.value;
            updateLocalStorage();
        });
    });

    // DELETE TASK 
    deleteBtn.addEventListener("click", () => {
        todoData.splice(index, 1);
        updateLocalStorage();
        renderTodos();
    });

    return li;
}

// RENDER TODOS 
function renderTodos() {
    toDoCont.innerHTML = "";
    todoData.forEach((todo, index) => {
        const li = createTodoElement(todo, index);
        toDoCont.appendChild(li);
    });
}

// SAVE 
function updateLocalStorage() {
    localStorage.setItem("todoData", JSON.stringify(todoData));
}

// ADD NEW TODO 
createTodoBtn.addEventListener("click", () => {
    if (taskNameInput.value.trim() === "") return;

    const newTodo = {
        name: taskNameInput.value,
        status: false,
    };

    todoData.push(newTodo);
    updateLocalStorage();
    renderTodos();

    taskNameInput.value = "";
});

// INITIAL LOAD 
renderTodos();