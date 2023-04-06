import hamburgerIcon from './icons/Hamburgermenu-icon.png';
import plusIcon from './icons/plus-circle-icon.png';
import getDate from 'date-fns/getDate';
import getDay from 'date-fns/getDay';
import getMonth from 'date-fns/getMonth';
import { el } from 'date-fns/locale';
import { newTodo, todos } from './todo_module';

export const getByID = (() => {
    const mainContent = document.querySelector('#main-content');
    const todoContainer = document.getElementById('todo-container');
    const hamburgerBtn = document.getElementById('hamburger-menu-btn');
    const newTodoNavBtn =  document.getElementById('new-todo-nav-btn');
    const newProjectBtn = document.getElementById('new-project-btn');
    const openModal = document.getElementById('new-todo-nav-btn');
    const newTodoModal = document.getElementById('modal');
    const closeModal = document.getElementById('close-modal');
    const submitTodo = document.getElementById('save-todo');
    const projects = document.getElementById('projects');
    const projectTitle = document.getElementById('projects-title');
    const todaySidebar = document.getElementById('today');
    const upcoming = document.getElementById('upcoming');
    const personalSidebar = document.getElementById('personal-sidebar');
    const workSidebar = document.getElementById('work-sidebar');
    const highPrioritySidebar = document.getElementById('high-pri-sidebar');

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
        todaySidebar,
        upcoming,
        personalSidebar, 
        workSidebar,
        highPrioritySidebar
    }
})();

export const renderDOM = () => {
    
    const appendDays = (() => {
        const weekdaysContainer = document.createElement('div');
        weekdaysContainer.id = 'week';
        getByID.mainContent.appendChild(weekdaysContainer);

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
        getByID.hamburgerBtn.appendChild(hamburgerMenuImg);
        
        const newTodoBtnImg = new Image();
        newTodoBtnImg.src = plusIcon;
        getByID.newTodoNavBtn.appendChild(newTodoBtnImg);

        const newProjectBtnImg = new Image();
        newProjectBtnImg.src = plusIcon;
        getByID.newProjectBtn.appendChild(newProjectBtnImg);

    })();

    return {
        appendImages,
        appendDays, 
    
    }
};

export const renderTodos = (() => {

    const todoContainer = document.createElement('div');
        todoContainer.id = 'todo-container';
        todoContainer.classList.add('active-page');
        getByID.mainContent.appendChild(todoContainer)

    const todaysTodosContainer = document.createElement('div');
        todaysTodosContainer.id = 'todays-todo-container';
      

        const createNewTodo = () => {

            const newtodo = document.createElement('div');
            newtodo.id = 'new-todo-div';
            newtodo.classList.add = 'todo';
            
            const checkbox = document.createElement('input'); 
            checkbox.setAttribute('type', 'checkbox');
            
            const displayTitle = document.createElement('div');
            displayTitle.id = 'display-title';
            displayTitle.textContent = todos.getTodos().title;

            const displayDescription = document.createElement('div');
            displayDescription.id = 'display-description';
            displayDescription.textContent = todos.getTodos().description;

            const displayDueDate = document.createElement('span');

            const month = new Date(todos.getTodos().dueDate);
        
            const date = document.createElement('button');
            date.textContent = new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'long', formatMatcher: 'basic'}).format(month);
            displayDueDate.appendChild(date)

            const todoContent =  [checkbox, displayTitle, displayDescription, displayDueDate];

            todoContent.forEach(e => {
                newtodo.appendChild(e);
            })

            todoContainer.appendChild(newtodo);
         
        }
    return {
        todoContainer,
        todaysTodosContainer,
        createNewTodo
    }
})();

export const deleteMaincontent = () => {
    if (getByID.mainContent.hasChildNodes()) {
     getByID.mainContent.childNodes.forEach(e => {
        e.nodeType === Node.ELEMENT_NODE && e.classList.contains('active-page') ? getByID.mainContent.removeChild(e) : false;
     });
      
    }
}
