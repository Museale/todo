import { addMonths } from "date-fns";
import getDate from "date-fns/getDate";
import getDay from "date-fns/getDay";
import { newTodo, getTodos, todos } from "./todo_module";
import { renderDOM, renderTodos, getByID, deleteMaincontent } from './DOM_module';
import { renderProjects } from "./projects";
import _ from "date-fns";

export const events = (() => {

    getByID.openModal.addEventListener('click', () => {
        getByID.newTodoModal.classList.remove('hidden');
    });

    getByID.closeModal.addEventListener('click', () => {
        getByID.newTodoModal.classList.add('hidden');
    });
   
    // document.body.addEventListener('load', () => {
    //     renderTodos.createNewTodo()
    //     todos.getTodos();
    // })
    
    getByID.submitTodo.addEventListener('click', () => {
        renderTodos.createNewTodo()
        todos.getTodos();
        getByID.newTodoModal.classList.add('hidden');
    });
    
    getByID.projectTitle.addEventListener('click', () => {
        deleteMaincontent()
        renderProjects();
    }); 

    getByID.todaySidebar.addEventListener('click', () => {
        console.log('todays todos')
        deleteMaincontent();
        getByID.mainContent.appendChild(renderTodos.todaysTodosContainer);
        

    });

    getByID.upcoming.addEventListener('click', () => {
        deleteMaincontent()
        getByID.mainContent.appendChild(renderTodos.todoContainer);
    });

})();


