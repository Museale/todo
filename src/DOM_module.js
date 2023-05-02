import hamburgerIcon from './icons/Hamburgermenu-icon.png';
import plusIcon from './icons/plus-circle-icon.png';
import getDate from 'date-fns/getDate';
import getDay from 'date-fns/getDay';
import getMonth from 'date-fns/getMonth';
import { el } from 'date-fns/locale';
import { newTodo, todos, eventHandleAddTodo } from './todo_module';
import { getYear } from 'date-fns';
import { roundToNearestMinutesWithOptions } from 'date-fns/fp';

console.log('dom')

export const get = (() => {
    const mainContent = document.querySelector('#main-content');
    const weekdaysContainer = document.getElementById('week');
    const todoContainer = document.getElementById('todo-container');
    const hamburgerBtn = document.getElementById('hamburger-menu-btn');
    const newTodoNavBtn = document.getElementById('new-todo-nav-btn');
    const newProjectBtn = document.getElementById('new-project-btn');
    const openModal = document.getElementById('new-todo-nav-btn');
    const projectModal = document.getElementById('project-modal');
    const newTodoModal = document.getElementById('modal');
    const closeModal = document.getElementById('close-modal');
    const closeProjectModal = document.getElementById('close-project-modal');
    const submitTodo = document.getElementById('save-todo');
    const saveProject = document.getElementById('save-project');
    const projectSelect  = document.getElementById('project-selection');
    const projects = document.getElementById('projects');
    const projectTitle = document.getElementById('project-title');
    const projectDescription = document.getElementById('project-description');
    const todaySidebar = document.getElementById('today');
    const upcoming = document.getElementById('upcoming');
    const completedSidebar = document.getElementById('completed');
    const projectListSidebar = document.getElementById('project-list');
    const title = document.getElementById('title-input');
    const description = document.getElementById('description-input');
    const due = document.getElementById('input-date');
    const priority = document.getElementById('priority');
    const todoList = document.getElementById('todo-list');
    const deleteTodo = () => document.getElementById('delete-todo');
    let checkbox = () => document.querySelectorAll('#checkbox');

    return {
      mainContent,
      weekdaysContainer,
      todoContainer,
      hamburgerBtn,
      newTodoNavBtn,
      newProjectBtn,
      openModal,
      newTodoModal,
      closeModal,
      submitTodo, 
      projects,
      projectTitle,
      projectDescription,
      projectListSidebar,
      projectSelect,
      saveProject,
      todaySidebar,
      completedSidebar,
      upcoming,
      title,
      description,
      due,
      priority,
      projectModal,
      closeProjectModal,
      checkbox, 
      todoList,
      deleteTodo
    };
  })();
  
export const renderDOM = (() => {
    const today = new Date().toISOString().substr(0, 10);
    get.due.defaultValue = today;

    const appendDays = (() => {
  
        const daysOfTheWeek = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

            const date = new Date();
            const dayOne = daysOfTheWeek[date.getDay()];
            const startIndex = daysOfTheWeek.indexOf(dayOne);
            const currentWeek = [dayOne];
       
            for (let i = startIndex + 1; i !== startIndex; i = (i + 1) % daysOfTheWeek.length) {
                currentWeek.length < 7 ? currentWeek.push(daysOfTheWeek[i]) : false;
                }
                for (let i = 0; i < daysOfTheWeek.length ; i++) { 
                    const dayIndex = (startIndex + i) % daysOfTheWeek.length;
                    const todaysDate = date.getDate() + i;
                    const dateContainer = document.createElement('div');
                    const dayNumber = document.createElement('div');
                    dayNumber.textContent = todaysDate;
                    dayNumber.id = todaysDate;
                    get.weekdaysContainer.appendChild(dateContainer);
                    dateContainer.appendChild(dayNumber)
                    dayNumber.textContent == date.getDate() ? dateContainer.style.color = "red" : false;
                    
                    const day = document.createElement('a');
                    day.textContent = daysOfTheWeek[dayIndex];
                    day.href = '#' + daysOfTheWeek[dayIndex];
                    day.id = daysOfTheWeek[dayIndex];
                    day.classList.add(`${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2, '0')}-${todaysDate.toString().padStart(2, '0')}`);
                    day.style.fontSize = '14px';
                    day.style.opacity = "0.7";
                    dateContainer.appendChild(day); 
                }
    })();    

    const appendImages = (() => {

        const hamburgerMenuImg = new Image();
        hamburgerMenuImg.src = hamburgerIcon;
        get.hamburgerBtn.appendChild(hamburgerMenuImg);
        
        const newTodoBtnImg = new Image();
        newTodoBtnImg.src = plusIcon;
        get.newTodoNavBtn.appendChild(newTodoBtnImg);

        const newProjectBtnImg = new Image();
        newProjectBtnImg.src = plusIcon;
        get.newProjectBtn.appendChild(newProjectBtnImg);

    })();

    return {
        appendImages,
        appendDays, 
        today
    }
})()

export const deleteMaincontent = () => {
    if (get.todoContainer.hasChildNodes()) {
     get.todoContainer.childNodes.forEach(e => {
        e.nodeType === Node.ELEMENT_NODE && !e.classList.contains('today') ? get.todoContainer.removeChild(e) : false;
     });
    }};