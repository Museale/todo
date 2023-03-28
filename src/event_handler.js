import getDate from "date-fns/getDate";
import getDay from "date-fns/getDay";

export const events = (() => {

    const openModal = document.getElementById('new-todo-nav-btn');
    const newTodoModal = document.getElementById('modal');
  

    openModal.addEventListener('click', () => {
        newTodoModal.classList.add('o');

    })
    
})();


