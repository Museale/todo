import { get, renderDOM } from "./DOM_module";
import { events } from "./event_handler";
console.log('todo');
  
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

  return {
    allTodos,
    todaysTodos,
    addTodoItem,
    updateTodoItem,
    deleteTodoItem,
    getTodos,
  }
})();

export const renderTodos = () => {
  const todoListUl = get.todoList;

  const todo = todos.getTodos();

  todo.forEach((todo) => {
      const todoId = `${todo.title}-${todo.dueDate}`;
      const existingTodo = document.getElementById(todoId);
        
    if (existingTodo) {
      return;
    }
      const todoElement = document.createElement('li');
          todoElement.classList.add(get.projectSelect.value.toLowerCase().split(' ').join('_'), 'new-todo-div');
          todoElement.id = todoId;
     
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
          dueDateElement.id = 'date';

      const deleteTodoButtonElement = document.createElement('button');        
          deleteTodoButtonElement.textContent = 'X';
          deleteTodoButtonElement.id = 'delete-todo';

      const checkbox = document.createElement('input');
          checkbox.setAttribute("type", "checkbox");
          checkbox.id = 'checkbox';

      const priorityElement = document.createElement('div');
        priorityElement.id = 'pri-element'
        switch(true) {
          case get.priority.value === 'Priority 1' : priorityElement.classList.add('green');
          break;
          case get.priority.value === 'Priority 2' : priorityElement.classList.add('orange');
          break;
          case get.priority.value === 'Priority 3' : priorityElement.classList.add('red');
          break;
        }
    
      const projectElement = document.createElement('div');
        projectElement.textContent = get.projectSelect.value;
        projectElement.id = 'proj-element'
      if (projectElement.textContent === 'Project') {
        projectElement.classList.add('hidden');
      }

      const todoArr = [checkbox, titleElement, descriptionElement, dueDateElement, deleteTodoButtonElement, priorityElement, projectElement];

      todoArr.forEach((el) => {
          todoElement.appendChild(el);
      });
    todoListUl.appendChild(todoElement);
  }   
  )

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
