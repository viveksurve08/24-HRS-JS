# Creating a basic Todo List with Local Storage

## 1. HTML Structure

- Create an HTML structure with an input field, a button, and a container to hold the todo items.
- Add a class to the container (e.g., `todo-lists-elem`).

## 2. Javascript Setup

- Select the necessary DOM elements and store referances (e.g., `mainTodoElem` and `inputValue`).

## 3. Add Click Event

- Add a click event listener to the "Add Todo" button ('btn').
- In the event listener, call a function (e.g., `addTodoList`) to handle adding a new todo.

## 4. Add Todo Function

- In the `addTodoList` function, prevent the defaault form submission.
- Create a new todo element (e.g., a `div` with a class `main_todo_div`) with the input value and a delete button.
- Append the new todo element to the container (`mainTodoElem`).
- Store the todo data in an array (`localTodoLists`) and update Local Storage usng `localStorage.setItem`.

## 5. Get Todo from Local Storage

- Create a function (e.g., `getTodoListFromLocal`) to retrieve todo data from Local Storage using `localStorage.getItem`.
- Use `JSON.parse` to convert the stored string into an array.

## 6. Show Todos

- Create a function (e.g., `showTodoList` to display todos on page load).
- Retrieve todo data from Local Storage using `getTodoListFromLocal`.
- Iterate through the array and dynamically add todos to the container.

## 7. Remove Todo Function

- Create a function (e.g., `removeTodo` to handle removing a todo).
- Use event delegation by adding a click event listener to the container (`mainTodoElem`).
- Check if the cliced element element has a class of "deleteBtn" and call the `removeTodo` function.

## 8. Update Local Storage on Remove

- In the `removeTodo` function, update the `localTodoLists` array by filtering out the
- Update Local Storage using `localStorage.setItem`.
