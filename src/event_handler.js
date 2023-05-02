import { renderDOM, get, deleteMaincontent, createNewTodo } from './DOM_module';
import { addProject } from "./projects";
import _, { isToday } from "date-fns";
import { eventHandleAddTodo, todos } from './todo_module';
import { check } from 'prettier';


console.log('Events')

export const events = () => {

    const filteredList = () => Array.from(get.todoList.childNodes).filter(node => node.nodeType === Node.ELEMENT_NODE);
    
    const filteredWeek = () => Array.from(get.weekdaysContainer.childNodes).filter(node => node.nodeType === Node.ELEMENT_NODE);

    get.weekdaysContainer.addEventListener('click', (e) => {
        const weekdayClass = e.target.classList[0];
        filteredList().forEach(child => {
            // console.log(child.classList[0], e.target.classList[0])
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
            console.log(e.target)
            const toDelete = e.target;
            const todoItem = toDelete.parentElement;
            todos.allTodos.map((todo, index) => {
                todoItem.id === `${todo.title}-${todo.dueDate}` ? todos.deleteTodoItem(todo[index]) : false;
                console.log(todos.allTodos)
            })
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

};