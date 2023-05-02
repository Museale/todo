import './style/style.scss';
import { renderDOM, appendDays, get, renderTodos } from './DOM_module';
import { newTodo, todos } from './todo_module';
import { events } from './event_handler';

const render = (() => {
    console.log('index')
    events();
})();
