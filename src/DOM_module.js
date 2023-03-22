import hamburgerIcon from './icons/Hamburgermenu-icon.png';
import plusIcon from './icons/plus-circle-icon.png';

export const renderDOM = () => {
    console.log('rendering');
    const appendImages = (() => {

        const hamburgerMenuImg = new Image();
        hamburgerMenuImg.src = hamburgerIcon;
        document.getElementById('hamburger-menu-btn').appendChild(hamburgerMenuImg);
        
        const newTodoBtnImg = new Image();
        newTodoBtnImg.src = plusIcon;
        document.getElementById('new-todo-nav-btn').appendChild(newTodoBtnImg);

    })();

    return {
        appendImages, 

    }
};