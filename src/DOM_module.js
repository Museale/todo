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
    const projectListSidebar = document.getElementById('project-list');
    const title = document.getElementById('title-input');
    const description = document.getElementById('description-input');
    const due = document.getElementById('input-date');
    const priority = document.getElementById('priority');
    const todoList = document.getElementById('todo-list')
    const deleteTodo = () => document.getElementById('delete-todo');
    let checkbox = () => document.querySelectorAll('#checkbox');

    return {
      mainContent,
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
        const weekdaysContainer = document.createElement('div');
        weekdaysContainer.id = 'week';
        get.mainContent.appendChild(weekdaysContainer);

        const daysOfTheWeek = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

            const date = new Date();
            const dayOne = daysOfTheWeek[date.getDay()];
          
            const startIndex = daysOfTheWeek.indexOf(dayOne);
            const currentWeek = [dayOne];
       
            for (let i = startIndex + 1; i !== startIndex; i = (i + 1) % daysOfTheWeek.length) {
                currentWeek.length < 7 ? currentWeek.push(daysOfTheWeek[i]) : false;
                }

            for (let i = 0; i < daysOfTheWeek.length ; i++) { 
                let todaysDate = [date.getDate() + i];

                const dateContainer = document.createElement('div');
                    dateContainer.textContent = todaysDate;
                    dateContainer.id = 'date-container';
                    weekdaysContainer.appendChild(dateContainer);
                    dateContainer.textContent == date.getDate() ? dateContainer.style.color = "red" : false;
                }

            currentWeek.forEach(element => {
                const day = document.createElement('a');
                    day.textContent = element;
                    day.href = '#' + day;
                    day.style.fontSize = '14px';
                    day.style.opacity = "0.7";
                    weekdaysContainer.appendChild(day);  
                });  
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

// export const renderTodos = (() => {

//     const todoContainer = document.createElement('div');
//         todoContainer.id = 'todo-container';
//         todoContainer.classList.add('active-page');
//         get.mainContent.appendChild(todoContainer)

//     const todaysTodosContainer = document.createElement('div');
//         todaysTodosContainer.id = 'todays-todo-container';

//     const todoArray = [];

//         const createNewTodo = () => {
        
//             const title = get.title.value;
//                 if (!title) {
//                 return;
//                 }

//             todos.getTodos();
            
//             const newTodo = document.createElement('div');
//             newTodo.classList.add(get.projectSelect.value.toLowerCase().split(' ').join('_'), 'new-todo-div');
//             newTodo.id = get.title.value.toLowerCase().split(' ').join('-');
//             newTodo.value =  get.due.value;
 
//             const checkbox = document.createElement('input'); 
//             checkbox.setAttribute('type', 'checkbox');
//             checkbox.id = 'checkbox';
            
//             const displayTitle = document.createElement('div');
//             displayTitle.id = 'display-title';
//             displayTitle.textContent = get.title.value;

//             const displayDescription = document.createElement('div');
//             displayDescription.id = 'display-description';
//             displayDescription.textContent = get.description.value;
     
//             const displayDueDate = document.createElement('span');

//             const month = new Date(get.due.value);
        
//             const date = document.createElement('button');
//             date.textContent = new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'long', formatMatcher: 'basic'}).format(month);

//             const deleteTodoBtn = document.createElement('button');
//             deleteTodoBtn.textContent = 'X';
//             deleteTodoBtn.id = 'delete-todo';

//             displayDueDate.appendChild(date)

//             const todoContent =  [checkbox, displayTitle, displayDescription, displayDueDate, deleteTodoBtn];

//             todoContent.forEach(e => {
//                 newTodo.appendChild(e);
//             })
           
//             todoContainer.appendChild(newTodo);

//             if (newTodo.value === renderDOM.today) {
//                 console.log(true)
//             }

//             // todos.completeTodo();
            
           
//             todoArray.push(newTodo);
//         }
    
//     return {
//         todoContainer,
//         todaysTodosContainer,
//         createNewTodo, 
//         todoArray
//     }
// })();


export const deleteMaincontent = () => {
    if (get.mainContent.hasChildNodes()) {
     get.mainContent.childNodes.forEach(e => {
        e.nodeType === Node.ELEMENT_NODE && e.classList.contains('active-page') ? get.mainContent.removeChild(e) : false;
     });
    }};