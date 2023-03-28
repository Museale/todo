import './style/style.scss';
import { renderDOM } from './DOM_module';
import { newTodo } from './todo_module';
import { eventHandler } from './event_handler';

const render = (() => {
    renderDOM();

    console.log(newTodo('Important', 'Pick up medications', '20.03.2023', 'red', 'Get some bandaids while you\'re at it'));
})();
