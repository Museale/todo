import { getByID } from "./DOM_module";


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

  const getTodos = () => {
    const defaultDate = new Date();
    const day = defaultDate.getDate();
    const month = defaultDate.getMonth() + 1;
    const year = defaultDate.getFullYear();
    const todaysDate =  `${year}-${month}-${day}`;
    const title = getByID.title.value;
    const description = getByID.description.value;
    const dueDate = getByID.dueDate.value ||  todaysDate;
    const priority = getByID.priority.value;

    const addTodo = newTodo(title, description, dueDate, priority);
  
    allTodos.push(addTodo);

    if(addTodo.dueDate === todaysDate) {
      todaysTodos.push(addTodo)
    }

   return {
    addTodo, title, description, dueDate, priority}
  };

return {
  allTodos,
  todaysTodos,
  getTodos
}

})();
