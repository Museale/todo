import './style/style.scss';
import { renderDOM, appendDays, get } from './DOM_module';
import { newTodo, todos, renderTodos } from './todo_module';
import { events } from './event_handler';
import { parse } from 'date-fns';

const render = (() => {
  events();
  renderTodos();
})();
