import { renderDOM, get, deleteMaincontent, createNewTodo } from './DOM_module';
import { addProject } from './projects';
import _, { getOverlappingDaysInIntervals, isToday } from 'date-fns';
import { eventHandleAddTodo, todos, renderTodos } from './todo_module';
import { check } from 'prettier';

export const events = () => {
  window.addEventListener('keypress', (e) => {
    e.code === '13' ? e.preventDefault() : false;
  });

  window.addEventListener('load', () => {
    for (let i = 0; i < localStorage.length; i++) {
      const todo = JSON.parse(localStorage.getItem(i));
      i > 2 ? todos.allTodos.push(todo) : false;
    }
    renderTodos();
  });

  const openSidebar = () => {
    if (window.innerWidth < 960) {
      get.sidebar.classList.toggle('open');
      get.sidebar.style.display = 'grid';
    }
  };

  const closeSidebar = () => {
    if (window.innerWidth < 960) {
      get.sidebar.classList.toggle('open');
      get.sidebar.style.display = 'none';
    }
  };

  window.addEventListener('resize', () => {
    if (!get.sidebar.classList.contains('open')) {
      openSidebar();
    }
    if (window.innerWidth < 960) {
      get.sidebar.style.display = 'none';
    }
    if (window.innerWidth > 960) {
      get.sidebar.style.display = 'grid';
    }
  });

  const filteredList = () =>
    Array.from(get.todoList.childNodes).filter(
      (node) => node.nodeType === Node.ELEMENT_NODE
    );

  get.weekdaysContainer.addEventListener('click', (e) => {
    closeSidebar();
    const weekdayClass = e.target.classList[0];
    filteredList().forEach((child) => {
      !child.classList.contains(weekdayClass)
        ? child.classList.add('hidden')
        : child.classList.remove('hidden');
    });
  });

  get.todoList.addEventListener('click', (e) => {
    if (e.target.id === 'checkbox') {
      const checkbox = e.target;
      const todoItem = checkbox.parentElement;
      todoItem.classList.toggle('completed');
      if (todoItem.classList.contains('completed')) {
        todoItem.classList.toggle('hidden');
      }

      todos.allTodos.map((item, index) => {
        if (
          `${item.title}-${item.dueDate}` === todoItem.id &&
          !item.completed
        ) {
          item.completed = true;
          localStorage.setItem(index, JSON.stringify(item));
        } else if (
          `${item.title}-${item.dueDate}` === todoItem.id &&
          item.completed
        ) {
          item.completed = false;
          localStorage.setItem(index, JSON.stringify(item));
        }
      });
    }
    if (e.target.id === 'edit-todo') {
      const editBtn = e.target;
      const todoItem = editBtn.parentElement;
      todoItem.classList.add('edited');
      get.newTodoModal.classList.remove('hidden');

      const displayTitle = document.querySelectorAll('#display-title');
      const displayDescription = document.querySelectorAll(
        '#display-description'
      );
      const displayProject = document.querySelectorAll('#proj-element');
      const displayPriority = document.querySelectorAll('#pri-element');

      Array.from(displayTitle).forEach((title) => {
        const todoItemName = Array.from(todoItem.id.split('-'));
        if (title.textContent === todoItemName[0]) {
          get.title.value = title.textContent;
        }
      });
      Array.from(displayDescription).forEach((description) => {
        if (todoItem == description.parentElement) {
          get.description.value = description.textContent;
        }
      });
      Array.from(displayProject).forEach((project) => {
        if (todoItem == project.parentElement) {
          get.projectSelect.value = project.textContent;
        }
      });
      Array.from(displayPriority).forEach((priority) => {
        if (todoItem == priority.parentElement) {
          switch (true) {
            case priority.classList.contains('green'):
              get.priority.value = 'Priority 1';
              break;
            case priority.classList.contains('orange'):
              get.priority.value = 'Priority 2';
              break;
            case priority.classList.contains('red'):
              get.priority.value = 'Priority 3';
              break;
          }
        }
      });

      todos.allTodos.forEach((todo, index) => {
        if (todoItem.id === `${todo.title}-${todo.dueDate}`) {
          todos.deleteTodoItem(index);
          localStorage.removeItem(index);
        }
        todos.saveInLocalStorage();
      });
      todoItem.remove();
    }
  });

  get.todoList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-todo')) {
      const toDelete = e.target;
      const todoItem = toDelete.parentElement;
      todos.allTodos.forEach((todo, index) => {
        if (todoItem.id === `${todo.title}-${todo.dueDate}`) {
          todos.deleteTodoItem(index);
          localStorage.removeItem(index);
        }
        todos.saveInLocalStorage();
      });
      todoItem.remove();
    }
  });

  get.projectListSidebar.addEventListener('click', (e) => {
    closeSidebar();
    const projectClass = e.target.classList[0];
    filteredList().forEach((child) => {
      !child.classList.contains(projectClass)
        ? child.classList.add('hidden')
        : child.classList.remove('hidden');
    });
  });

  get.openModal.addEventListener('click', () => {
    closeSidebar();
    get.newTodoModal.classList.remove('hidden');
    const filteredNewTodoForm = Array.from(get.newTodoForm.childNodes).filter(
      (node) => node.nodeType === Node.ELEMENT_NODE
    );
    filteredNewTodoForm.forEach((child) => {
      child.id === 'title-input' ? (child.value = '') : false;
      child.id === 'description-input' ? (child.value = '') : false;
      child.id === 'input-date' ? (child.value = todos.defaultDate) : false;
      get.projectSelect.value = 'Project';
      get.priority.value = 'Priority';
    });
  });

  get.closeModal.addEventListener('click', (e) => {
    closeSidebar();
    e.preventDefault();
    get.newTodoModal.classList.add('hidden');
  });

  get.closeProjectModal.addEventListener('click', (e) => {
    closeSidebar();
    e.preventDefault();
    get.projectModal.classList.add('hidden');
  });

  get.submitTodo.addEventListener('click', (e) => {
    closeSidebar();
    e.preventDefault();
    eventHandleAddTodo();
    get.newTodoModal.classList.add('hidden');
  });

  get.saveProject.addEventListener('click', (e) => {
    closeSidebar();
    e.preventDefault();
    addProject.addToList();
    get.projectModal.classList.add('hidden');
  });

  get.newProjectBtn.addEventListener('click', () => {
    closeSidebar();
    get.projectModal.classList.remove('hidden');
  });

  get.todaySidebar.addEventListener('click', () => {
    closeSidebar();
    filteredList().forEach((child) => {
      !child.classList.contains('today') ||
      child.classList.contains('completed')
        ? child.classList.add('hidden')
        : child.classList.remove('hidden');
    });
  });

  get.upcoming.addEventListener('click', (e) => {
    closeSidebar();
    filteredList().forEach((child) => {
      child.classList.contains('completed')
        ? child.classList.add('hidden')
        : child.classList.remove('hidden');
    });
  });

  get.completedSidebar.addEventListener('click', () => {
    closeSidebar();
    filteredList().forEach((child) => {
      child.classList.contains('completed')
        ? child.classList.remove('hidden')
        : child.classList.add('hidden');
    });
  });

  get.todoList.addEventListener('click', (e) => {
    closeSidebar();
    e.target.classList.contains('new-todo-div')
      ? e.target.classList.toggle('active')
      : false;

    Array.from(e.target.childNodes).forEach((child) => {
      if (e.target.classList.contains('active')) {
        child.id === 'display-description'
          ? child.classList.toggle('hidden')
          : false;
      } else if (!e.target.classList.contains('active')) {
        child.id === 'display-description'
          ? child.classList.toggle('hidden')
          : false;
      }
    });
  });

  get.hamburgerBtn.addEventListener('click', () => {
    if (!get.sidebar.classList.contains('open')) {
      openSidebar();
    } else {
      closeSidebar();
    }
  });
};
