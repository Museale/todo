import { get, renderDOM, renderTodos } from "./DOM_module";

export const newTodo = (title, description, dueDate, priority, project) => {
  return {
    title,
    description,
    dueDate,
    priority,
    project

  };
};

export const todos = (() => {
  const allTodos = [];
  const todaysTodos = [];
  const defaultDate = new Date().toISOString().substr(0, 10);

    const getTodos = () => {
      const addTodo = newTodo(get.title.value, get.description.value || defaultDate, get.due.value, get.priority.value, get.projectSelect.value);

      get.title.value ? allTodos.push(addTodo) : false;
    
      addTodo.dueDate === defaultDate ? todaysTodos.push(addTodo) : false; 
      
    };
  
  return {
    allTodos,
    todaysTodos,
    getTodos,
  }

})();

