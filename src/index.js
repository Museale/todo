import './style/style.scss';
import { renderDOM, appendDays, renderTodos } from './DOM_module';
import { newTodo, todos } from './todo_module';
import { events } from './event_handler';

const render = (() => {
    renderDOM();
 
})();
