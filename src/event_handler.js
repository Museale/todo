import { addMonths } from "date-fns";
import getDate from "date-fns/getDate";
import getDay from "date-fns/getDay";
import { newTodo, getTodos, todos } from "./todo_module";
import { renderDOM, renderTodos } from './DOM_module';


import _ from "date-fns";

export const events = (() => {

    const openModal = document.getElementById('new-todo-nav-btn');
    const newTodoModal = document.getElementById('modal');
    const closeModal = document.getElementById('close-modal');
    const submitTodo = document.getElementById('save-todo');

    openModal.addEventListener('click', () => {
        newTodoModal.classList.remove('hidden');

    })

    closeModal.addEventListener('click', () => {
        newTodoModal.classList.add('hidden');
    })
   
    submitTodo.addEventListener('click', () => {
        renderTodos();
        todos.getTodos();
        newTodoModal.classList.add('hidden');
    
    })
    
})();


