import { renderDOM, get, deleteMaincontent, createNewTodo } from './DOM_module';
import { addProject } from "./projects";
import _ from "date-fns";
import { eventHandleAddTodo } from './todo_module';


console.log('Events')

export const events = () => {

    get.openModal.addEventListener('click', () => {
        get.newTodoModal.classList.remove('hidden');
    });

    get.closeModal.addEventListener('click', () => {
        get.newTodoModal.classList.add('hidden');
    });

    get.closeProjectModal.addEventListener('click', () => {
        get.projectModal.classList.add('hidden');
    });

    get.submitTodo.addEventListener('click', (event) => {
        event.preventDefault();
        eventHandleAddTodo();
        get.newTodoModal.classList.add('hidden');
    });

    get.saveProject.addEventListener('click', () => {
        addProject.addToList();
        get.projectModal.classList.add('hidden');
    });
    get.newProjectBtn.addEventListener('click', () => {
        get.projectModal.classList.remove('hidden');
    });

    // get.todaySidebar.addEventListener('click', () => {
    //     deleteMaincontent();
    //     get.mainContent.appendChild(renderTodos.todaysTodosContainer);
    //     renderTodos.todoContainer.classList.add('active-page');
    // });

    // get.upcoming.addEventListener('click', () => {
    //     deleteMaincontent();
    //     get.mainContent.appendChild(renderTodos.todoContainer);
    // });

    Array.from(get.projects).map(listItem => {
        listItem.addEventListener('click', () => {
            console.log(listItem)
        });
    });

};