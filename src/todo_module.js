import { get, renderDOM, renderTodos } from "./DOM_module";


export const newTodo = (title, description, dueDate, priority) => {
  return {
    title,
    description,
    dueDate,
    priority,

  };
};


export const todos = (() => {
  const allTodos = [];
  const todaysTodos = [];
  const defaultDate = new Date().toISOString().substr(0, 10);

    const getTodos = () => {
  
      const title = get.title.value;
      const description = get.description.value;
      const dueDate = get.due.value || defaultDate ;
      const priority = get.priority.value;

      const addTodo = newTodo(title, description, dueDate, priority);

      title ? allTodos.push(addTodo) : false;
    
      addTodo.dueDate === defaultDate ? todaysTodos.push(addTodo) : false; 
    

      return {
        addTodo, 
        title, 
        description, 
        dueDate, 
        priority
      }
    };
  
  return {
    allTodos,
    todaysTodos,
    getTodos,
  }

})();
