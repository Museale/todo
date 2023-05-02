import './style/style.scss';
import { renderDOM, appendDays, get} from './DOM_module';
import { newTodo, todos, renderTodos } from './todo_module';
import { events } from './event_handler';

const render = (() => {
    console.log('index')
    events();
    todos.allTodos.forEach((item, index)=> {
        localStorage.setItem(index, JSON.stringify(item))
    })
    // localStorage.setItem('todos', JSON.stringify(todos.allTodos))
    renderTodos();
})();
