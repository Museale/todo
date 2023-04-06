import { getDate } from "date-fns";
import getMonth from "date-fns/getMonth";
import parseISO from "date-fns/parseISO";
import { getByID } from "./DOM_module";

import { renderTodos } from "./DOM_module";

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
    const day = defaultDate.getDate() - 2;
    const month = defaultDate.getMonth() + 3;
    const year = defaultDate.getFullYear();
    const todaysDate =  `${year}-${day}-${month}`;
    const title = document.getElementById('title-input').value;
    const description = document.getElementById('description-input').value;
    const dueDate = document.getElementById('date').value ||  todaysDate;
    const priority = document.getElementById('priority').value;

    const addTodo = newTodo(title, description, dueDate, priority);
    allTodos.push(addTodo);


    if(addTodo.dueDate === todaysDate) {
      todaysTodos.push(addTodo)
    }


  return addTodo;
 
  };

return {
  allTodos,
  todaysTodos,
  getTodos
}
})();
