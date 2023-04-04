import { getDate } from "date-fns";
import getMonth from "date-fns/getMonth";
import parseISO from "date-fns/parseISO";
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
  
  const getTodos = () => {
    const defaultDate = new Date();
    const day = defaultDate.getDate();
    const month = defaultDate.getMonth() + 1;

    const title = document.getElementById('title-input').value;
    const description = document.getElementById('description-input').value;
    const dueDate = document.getElementById('date').value ||  `${day} ${month}`;
    const priority = document.getElementById('priority').value;

    const addTodo = newTodo(title, description, dueDate, priority);
    allTodos.push(addTodo)
  return addTodo;
 
  };

return {
  allTodos,
  getTodos
}
})();
