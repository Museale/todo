import './style/style.scss';
import { renderDOM } from './DOM_module';
import { newTodo } from './todo_module';
import { events } from './event_handler';

const render = (() => {
    renderDOM();

})();
