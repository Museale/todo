import { get } from './DOM_module';
import { events } from './event_handler';
import { todos } from './todo_module';

export const projects = (() => {
  const projectArray = [
    {
      title: 'Personal',
      description: 'These are my personal todos',
    },
    {
      title: 'Work',
      description: '',
    },
    {
      title: 'Hobby',
      description: 'Drawing, painting, playing music.',
    },
  ];

  const addprojectItem = (project) => {
    projectArray.push(project);
    saveProjectInLocalStorage();
  };

  const saveProjectInLocalStorage = () => {
    todos.saveInLocalStorage();
    projectArray.forEach((item, index) => {
      localStorage.setItem('project' + index, JSON.stringify(item));
    });
  };

  const getProjects = () => {
    return projectArray;
  };

  const deleteProjectItem = (index) => {
    projectArray.splice(index, 1);
  };

  return {
    projectArray,
    addprojectItem,
    getProjects,
    saveProjectInLocalStorage,
    deleteProjectItem,
  };
})();

export const renderProjects = () => {
  const projectListUl = get.projectListSidebar;
  const project = projects.getProjects();

  const displayProjects = (project) => {
    const projectId = `${project.title.toLowerCase().split(' ').join('-')}`;
    const existingProject = document.getElementById(projectId);

    if (existingProject) {
      return;
    }

    const projectElement = document.createElement('li');
    projectElement.id = projectId;

    const displayProjectDescription = document.createElement('div');
    displayProjectDescription.textContent = project.description;
    displayProjectDescription.classList.add('hidden');
    displayProjectDescription.id = 'project-description-sidebar';

    const projectDeleteBtn = document.createElement('button');
    projectDeleteBtn.textContent = 'X';
    projectDeleteBtn.id = project.title + '-delete';
    projectDeleteBtn.classList.add('delete-project');

    const listAnchor = document.createElement('a');
    listAnchor.href = '#';
    listAnchor.classList.add(projectElement.id);
    listAnchor.textContent = project.title;

    const projectSelection = document.createElement('option');
    projectSelection.textContent = project.title;

    projectElement.appendChild(listAnchor);
    projectElement.appendChild(projectDeleteBtn);
    projectListUl.appendChild(projectElement);
    get.projectSelect.appendChild(projectSelection);
    if (project.description !== '') {
      projectElement.appendChild(displayProjectDescription);
    }
    return {
      projectElement,
    };
  };
  project.forEach((project) => {
    displayProjects(project);
  });
};

export const eventHandleAddProject = () => {
  const title = get.projectTitle.value;
  const description = get.projectDescription.value;

  const project = {
    title: title,
    description: description,
  };

  projects.addprojectItem(project);
  renderProjects();
};
