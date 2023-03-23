import hamburgerIcon from './icons/Hamburgermenu-icon.png';
import plusIcon from './icons/plus-circle-icon.png';
import getDate from 'date-fns/getDate';
import getDay from 'date-fns/getDay';

export const renderDOM = () => {
    
    const appendDays = (() => {

        const daysOfTheWeek = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  
         const weekdaysContainer = document.getElementById('week');
            const date = new Date();
            const dayOne = daysOfTheWeek[date.getDay()];
            const startIndex = daysOfTheWeek.indexOf(dayOne);
            const currentWeek = [dayOne];

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