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

  allTodos.push(newTodo('hey', 'there', 'you', 'hey'));
  
  const getTodos = () => {

    const title = document.getElementById('title-input').value;
    const description = document.getElementById('description-input').value;
    const dueDate = document.getElementById('date').value;
    const priority = document.getElementById('priority').value;

    const addTodo = newTodo(title, description, dueDate, priority);
    allTodos.push(addTodo)
  return addTodo;
 
  };


  // console.log(allTodos)
 

return {
  allTodos,
  getTodos
}
})();
