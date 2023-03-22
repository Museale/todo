import hamburgerIcon from './icons/Hamburgermenu-icon.png';
import plusIcon from './icons/plus-circle-icon.png';
import getDate from 'date-fns/getDate';

export const renderDOM = () => {
    console.log('rendering');   
    
    const appendDays = (() => {

        const daysOfTheWeek = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

        const currentWeek = [];
        
        const weekdaysContainer = document.getElementById('week');
    
        for(let i = 0; i < daysOfTheWeek.length - 3; i++) {    
            const date = new Date();
            let todaysDate = [date.getDate() + i];
            let today = daysOfTheWeek[date.getDay() + i];
         
            currentWeek.push(today);
            console.log(currentWeek)
       
            const dateContainer = document.createElement('div');
                dateContainer.textContent = todaysDate;
                dateContainer.id = 'date-container';
                weekdaysContainer.appendChild(dateContainer);
                console.log(today);
                if (dateContainer.textContent == date.getDate()) {
                    dateContainer.style.color = "red";
                }
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