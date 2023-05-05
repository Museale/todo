import { check } from "prettier";
import { get, renderDOM } from "./DOM_module";
import { events } from "./event_handler";
import { newProject } from "./projects";

export const todos = (() => {

  const todaysTodos = [];
  const defaultDate = new Date().toISOString().substr(0, 10);

  const allTodos = [{title: 'Buy food for cats', description: 'Royal Canine Sterilized wetfood, Hills Metabolic dryfood, and freezerdried chicken treats.', dueDate: defaultDate, priority: 'Priority 3', project: 'High Priority', completed: false}, {title: 'Study Japanese', description: 'Remember lesson notes that teacher sent by email.', dueDate: defaultDate, priority: 'Priority 2', project: 'Personal', completed: false}, {title: 'Draw cards for Vilma, Laura and Asta', description: 'Wrap Birthday gifts.', dueDate: defaultDate, priority: 'Priority 1', project: 'Personal', completed: false}];

    const addTodoItem = (todo) => {
      allTodos.push(todo);
      saveInLocalStorage();
    };

    const saveInLocalStorage = () => {
      localStorage.clear()
      allTodos.forEach((item, index)=> {
        localStorage.setItem(index, JSON.stringify(item))
      })
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

    const addProject = (todo, project) => {
      todo.classList.add(project);
    }

  return {
    allTodos,
    todaysTodos,
    addTodoItem,
    updateTodoItem,
    deleteTodoItem,
    getTodos,
    addProject,
    defaultDate,
    saveInLocalStorage
  }
})();

export const renderTodos = () => {

  const todoListUl = get.todoList;
  const todo = todos.getTodos();

const displayTodo = (todo) => {

  const todoId = `${todo.title}-${todo.dueDate}`;
  const existingTodo = document.getElementById(todoId);
    
if (existingTodo) {
  return;
}
  const todoElement = document.createElement('li');
      todoElement.classList.add(todo.dueDate, get.projectSelect.value.toLowerCase().split(' ').join('_'), 'new-todo-div');
      todoElement.id = todoId;
 
  const titleElement = document.createElement('div');
      titleElement.textContent = todo.title;
      titleElement.id = 'display-title';

  const descriptionElement = document.createElement('div');
      descriptionElement.textContent = todo.description;
      descriptionElement.id = 'display-description';
      descriptionElement.classList.add('hidden');

  const dueDateElement = document.createElement('span');
  const month = new Date(get.due.value);
  const date = document.createElement('button');
      date.textContent = new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'long', formatMatcher: 'basic'}).format(month);
      dueDateElement.appendChild(date);
      dueDateElement.id = 'date';

  const deleteTodoButtonElement = document.createElement('button');        
      deleteTodoButtonElement.textContent = 'X';
      deleteTodoButtonElement.id =  `${todo.title}-delete`;
      deleteTodoButtonElement.classList.add('delete-todo')

  const checkbox = document.createElement('input');
      checkbox.setAttribute("type", "checkbox");
      checkbox.id = 'checkbox';

  const priorityElement = document.createElement('div');

    priorityElement.id = 'pri-element'
    switch(true) {
      case get.priority.value === 'Priority 1' || todo.priority === 'Priority 1' : priorityElement.classList.add('green');
      break;
      case get.priority.value == 'Priority 2' || todo.priority === 'Priority 2': priorityElement.classList.add('orange');
      break;
      case get.priority.value == 'Priority 3' || todo.priority === 'Priority 3': priorityElement.classList.add('red');
      break;
    }

  const projectElement = document.createElement('div');
    projectElement.textContent = todo.project || get.projectSelect.value;
    projectElement.id = 'proj-element'

  const editTodoBtn = document.createElement('button');
  editTodoBtn.id = 'edit-todo';

  if (projectElement.textContent === 'Project') {
    projectElement.classList.add('hidden');
  }
  if (todo.dueDate === todos.defaultDate) {
    todoElement.classList.add('today');
  }
  if (todo.completed === true) {
    todoElement.classList.add('completed');
    todoElement.classList.toggle('hidden');
    checkbox.checked = true;
  }
  if (!todo.completed) {
    todoElement.classList.remove('completed');
    todoElement.classList.remove('hidden')
  }
  const todoArr = [checkbox, titleElement, descriptionElement, dueDateElement, deleteTodoButtonElement, priorityElement, projectElement, editTodoBtn];

  todoArr.forEach((el) => {
      todoElement.appendChild(el);
  });
  todoListUl.appendChild(todoElement);
    return {
      todoElement
    }
  }   
  todo.forEach((todo) => {
    displayTodo(todo);
  })

};

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
    project: project,
    completed: false
  };

  todos.addTodoItem(todo);

  renderTodos()
}
