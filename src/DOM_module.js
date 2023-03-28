import hamburgerIcon from './icons/Hamburgermenu-icon.png';
import plusIcon from './icons/plus-circle-icon.png';
import getDate from 'date-fns/getDate';
import getDay from 'date-fns/getDay';
import { el } from 'date-fns/locale';

export const renderDOM = () => {
    
    const appendDays = (() => {
        
        const daysOfTheWeek = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  
         const weekdaysContainer = document.getElementById('week');
         const modalDate = document.getElementById('date');

            const date = new Date();
            const dayOne = daysOfTheWeek[date.getDay()];
          
            const startIndex = daysOfTheWeek.indexOf(dayOne);
            const currentWeek = [dayOne];
            modalDate.value = 'today';

            for (let i = startIndex + 1; i !== startIndex; i = (i + 1) % daysOfTheWeek.length) {
                currentWeek.length < 4 ? currentWeek.push(daysOfTheWeek[i]) : false;
                }

            for (let i = 0; i < daysOfTheWeek.length - 3; i++) { 
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
        document.getElementById('hamburger-menu-btn').appendChild(hamburgerMenuImg);
        
        const newTodoBtnImg = new Image();
        newTodoBtnImg.src = plusIcon;
        document.getElementById('new-todo-nav-btn').appendChild(newTodoBtnImg);

        const newProjectBtnImg = new Image();
        newProjectBtnImg.src = plusIcon;
        document.getElementById('new-project-btn').appendChild(newProjectBtnImg);

    })();

    return {
        appendImages, 
        appendDays

    }
};

// export const todoModal = (() => {
//     const createModal = (() => {
//         const todoContainer = document.getElementById('todo-container');
        
//         const modal = document.createElement('div');
//         modal.id = 'modal';
//         modal.style.visibility = 'hidden';
//         todoContainer.appendChild(modal);

//         const closeModal = document.createElement('button');
//         closeModal.textContent = 'X';
//         closeModal.id = 'close-modal-btn';

//         const title = document.createElement('input');
//         title.setAttribute('type', 'text');
//         title.id = 'title';

//         const description = document.createElement('input');
//         description.setAttribute('type', 'text');
//         description.id = 'description';

//         const priority = document.createElement('select');
//         priority.id = 'priority';

//             const red = document.createElement('option');
//             red.style.backgroundColor = 'red';

//             const orange = document.createElement('option');
//             orange.style.backgroundColor = 'orange';

//             const green = document.createElement('option');
//             green.textContent = 'Green'
//             green.setAttribute('selected', 'selected');
//             green.style.color = 'green';

//         const options = [red, orange, green];
//         const inputFields = [title, closeModal, description, priority];

//         inputFields.forEach(input => modal.appendChild(input));

//         options.forEach(option => priority.appendChild(option));

//         return {
//             todoContainer, 
//             closeModal,
//             modal
//         }})();

//         const handleEvent = (() => {
//             const addTodoBtn = document.getElementById('new-todo-nav-btn');
//             addTodoBtn.addEventListener('click', () => {
//                 createModal.modal.style.visibility = 'visible';
//             });
//             createModal.closeModal.addEventListener('click', () => {
//                 createModal.modal.style.visibility = 'hidden';
//             })
//         }
// )()

// })()



