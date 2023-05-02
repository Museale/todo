import { renderDOM, get, deleteMaincontent, createNewTodo } from './DOM_module';
import { addProject } from "./projects";
import _, { isToday } from "date-fns";
import { eventHandleAddTodo, todos } from './todo_module';
import { check } from 'prettier';


console.log('Events')

export const events = () => {
    const filteredList = () => Array.from(get.todoList.childNodes).filter(node => node.nodeType === Node.ELEMENT_NODE);

    get.todoList.addEventListener('click', (e) => {
        if(e.target.id =='checkbox') {
            const checkbox = e.target;
            const todoItem = checkbox.parentElement;
            todoItem.classList.toggle('completed');
            if (todoItem.classList.contains('completed')) {
                todoItem.classList.toggle('hidden');
            }
        }
        
    });

    get.openModal.addEventListener('click', () => {
        get.newTodoModal.classList.remove('hidden');
    });

    get.closeModal.addEventListener('click', () => {
        get.newTodoModal.classList.add('hidden');
    });

    get.closeProjectModal.addEventListener('click', () => {
        get.projectModal.classList.add('hidden');
    });

    get.submitTodo.addEventListener('click', (e) => {
        e.preventDefault();
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


    get.todaySidebar.addEventListener('click', () => {
       filteredList().forEach(child => {
        !child.classList.contains('today') ? child.classList.add('hidden') : false;
       })
    });

    get.upcoming.addEventListener('click', (e) => {
       filteredList().forEach(child => {
         child.classList.contains('completed') ? child.classList.add('hidden') : child.classList.remove('hidden');
        })
    });

    get.completedSidebar.addEventListener('click', () => {
        filteredList().forEach(child => {
        child.classList.contains('completed') ? child.classList.remove('hidden') : child.classList.add('hidden');
        })
    });

    const deleteTodoOnClick = (todoBtn, todo) => {
        get.deleteTodo().addEventListener('click', () => {

            console.log(todoBtn.parentElement)
            if (todoBtn.id === todo.id) {
                todos.deleteTodoItem(todos);
                todoBtn.parentElement.remove;
            };
        })
    };

    const addProjectListeners = (projectArray) =>  { 
       projectArray.map(listItem => {
        listItem.addEventListener('click', () => {
            console.log(listItem)
        });
    });}

    return {
        addProjectListeners,
        deleteTodoOnClick,

    }

};