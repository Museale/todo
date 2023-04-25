import { get, renderDOM } from "./DOM_module";
import { events } from "./event_handler";
console.log('todo')
// export const newTodo = (title, description, dueDate, priority, project, completed) => {
  
//   return {
//     title,
//     description,
//     dueDate,
//     priority,
//     project, 
//     completed

//   };
// };

export const todos = (() => {
  const allTodos = [];
  const todaysTodos = [];
  let counter = 0;
  const defaultDate = new Date().toISOString().substr(0, 10);

    const addTodoItem = (todo) => {
      allTodos.push(todo);
    };

    const updateTodoItem = (index, todo) => {
      allTodos[index] = todo;
    };

    const deleteTodoItem = (index) => {
      allTodos.splice(index, 1);
    };

    const getTodos = () => {
   
      return allTodos;
    }
      // counter++;
      // const addTodo = newTodo(get.title.value, get.description.value, get.due.value, get.priority.value, get.projectSelect.value, false);
      // console.log(addTodo)
      // get.title.value ? allTodos.push(addTodo) : false;

      // addTodo.dueDate === defaultDate ? todaysTodos.push(addTodo) : false; 
      // const todoJson = JSON.stringify(addTodo);
      // localStorage.setItem('todo' + counter, todoJson);
      // console.log(todoJson)
    // };
    // const completeTodo = () => {

    //   get.checkbox().addEventListener('change', () => {
    //     if (get.checkbox().checked) {
    //         get.checkbox().parentNode.classList.add('completed');
    //         console.log('Checkbox is checked!');
    //     } else {
    //         console.log('Checkbox is unchecked!');
    //     }
    // })
    // if (get.checkbox().parentNode.classList.contains('completed')){
    //     console.log('completed')
    // }
    // };
  return {
    allTodos,
    todaysTodos,
    addTodoItem,
    updateTodoItem,
    deleteTodoItem,
    getTodos,
    // completeTodo
  }
})();

export const renderTodos = () => {
  const todoListUl = get.todoList;
  const todo = todos.getTodos();

  todo.forEach((todo, index) => {

      const todoElement = document.createElement('li');
          todoElement.classList.add(get.projectSelect.value.toLowerCase().split(' ').join('_'), 'new-todo-div');

      const titleElement = document.createElement('div');
          titleElement.textContent = todo.title;
          titleElement.id = 'display-title';

      const descriptionElement = document.createElement('div');
          descriptionElement.textContent = todo.description;
          descriptionElement.id = 'display-description';

      const dueDateElement = document.createElement('span');
      const month = new Date(get.due.value);
      const date = document.createElement('button');
          date.textContent = new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'long', formatMatcher: 'basic'}).format(month);
          dueDateElement.appendChild(date);
          dueDateElement.textContent = todo.due;
          dueDateElement.id = 'date';

      const deleteTodoButtonElement = document.createElement('button');        
          deleteTodoButtonElement.textContent = 'X';
          deleteTodoButtonElement.id = 'delete-todo';

      const checkbox = document.createElement('input');
          checkbox.setAttribute("type", "checkbox");
          checkbox.id = 'checkbox';

      const todoArr = [checkbox, titleElement, descriptionElement, dueDateElement, deleteTodoButtonElement];

      todoArr.forEach((el) => {
          todoElement.appendChild(el);
      });
      todoListUl.appendChild(todoElement)
  })



}

export const eventHandleAddTodo = () => {
  const title = get.title.value;
  const description = get.description.value;
  const dueDate = get.due.value;
  const priority = get.priority.value;
  const project = get.projectSelect.value;

  const todo = {
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
    project: project
  };
  
  todos.addTodoItem(todo);

  renderTodos()
}
