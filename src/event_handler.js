import { renderDOM, get, deleteMaincontent, createNewTodo } from './DOM_module';
import { addProject } from "./projects";
import _, { isToday } from "date-fns";
import { eventHandleAddTodo, todos } from './todo_module';
import { check } from 'prettier';

console.log('Events')

export const events = () => {

 window.addEventListener('keypress', (e) => {
        e.code === '13' ? e.preventDefault() : false;
    });

    const filteredList = () => Array.from(get.todoList.childNodes).filter(node => node.nodeType === Node.ELEMENT_NODE);

    get.weekdaysContainer.addEventListener('click', (e) => {
        const weekdayClass = e.target.classList[0];
        filteredList().forEach(child => {
        !child.classList.contains(weekdayClass) ? child.classList.add('hidden') : child.classList.remove('hidden');
        })
    });

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

    get.todoList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-todo')) {
            const toDelete = e.target;
            const todoItem = toDelete.parentElement;
            todos.allTodos.forEach((todo, index) => {
                todoItem.id === `${todo.title}-${todo.dueDate}` ? todos.deleteTodoItem(index) : false;
            })
            console.log(todos.allTodos)
            todoItem.remove();
        }
    })

    get.projectListSidebar.addEventListener('click', (e) => {
        const projectClass = e.target.classList[0];
        filteredList().forEach(child => {
           !child.classList.contains(projectClass) ? child.classList.add('hidden') : child.classList.remove('hidden');
        })
    });

    get.openModal.addEventListener('click', () => {
        get.newTodoModal.classList.remove('hidden');
    });

    get.closeModal.addEventListener('click', (e) => {
        e.preventDefault();
        get.newTodoModal.classList.add('hidden');
    });

    get.closeProjectModal.addEventListener('click', (e) => {
        e.preventDefault();
        get.projectModal.classList.add('hidden');
    });

    get.submitTodo.addEventListener('click', (e) => {
        e.preventDefault();
        eventHandleAddTodo();
        get.newTodoModal.classList.add('hidden');
    });
    
    
    get.saveProject.addEventListener('click', (e) => {

        e.preventDefault();
        addProject.addToList();
        get.projectModal.classList.add('hidden');
    });

    get.newProjectBtn.addEventListener('click', () => {
        get.projectModal.classList.remove('hidden');
    });


    get.todaySidebar.addEventListener('click', () => {
       filteredList().forEach(child => {
        !child.classList.contains('today') || child.classList.contains('completed') ? child.classList.add('hidden') : child.classList.remove('hidden');
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

    get.todoList.addEventListener('click', (e) => {
      e.target.classList.contains('new-todo-div') ? 
        e.target.classList.toggle('active') : false;

        Array.from(e.target.childNodes).forEach(child => {
           if (e.target.classList.contains('active')) {
            child.id === 'display-description' ? child.classList.toggle('hidden') : false;
           } else if (!e.target.classList.contains('active')){
            child.id === 'display-description' ? child.classList.toggle('hidden') : false;
           }
        })
    })

};