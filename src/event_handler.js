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

    getByID.closeProjectModal.addEventListener('click', () => {
        getByID.projectModal.classList.add('hidden');
    });

    getByID.submitTodo.addEventListener('click', () => {
        renderTodos.createNewTodo()
        getByID.newTodoModal.classList.add('hidden');
    });

    getByID.saveProject.addEventListener('click', () => {
        getByID.projectModal.classList.add('hidden');
    })
    
    getByID.newProjectBtn.addEventListener('click', () => {
        getByID.projectModal.classList.remove('hidden');
    }
    )
    getByID.projectTitle.addEventListener('click', () => {
        deleteMaincontent()
        renderProjects();
    }); 

    getByID.todaySidebar.addEventListener('click', () => {
        deleteMaincontent();
        getByID.mainContent.appendChild(renderTodos.todaysTodosContainer);
        renderTodos.todoContainer.classList.add('active-page');
    });

    getByID.upcoming.addEventListener('click', () => {
        deleteMaincontent()
        getByID.mainContent.appendChild(renderTodos.todoContainer);
    });

})();


