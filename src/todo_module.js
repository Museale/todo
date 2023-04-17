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
  const defaultDate = new Date().toISOString().substr(0, 10);;
  // const day = defaultDate.getDate();
  // const month = defaultDate.getMonth() + 1;
  // const year = defaultDate.getFullYear();
  // const todaysDate =  `${month}-${day}-${year}`;
 
  const getTodos = () => {
 
    const title = getByID.title.value;
    const description = getByID.description.value;
    const dueDate = getByID.due.value || defaultDate ;

    const priority = getByID.priority.value;

    const addTodo = newTodo(title, description, dueDate, priority);
  
    allTodos.push(addTodo);

    if(addTodo.dueDate === defaultDate) {
      todaysTodos.push(addTodo)
    }

   return {
    addTodo, title, description, dueDate, priority}
  };
 
return {
  allTodos,
  todaysTodos,
  getTodos,

}

})();
