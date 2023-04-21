import { get, deleteMaincontent } from "./DOM_module";

export const newProject = (project, description)=> {
    const projectTodo = [];
    return{
        projectTodo,
        project, 
        description
    }
}

export const addProject = (() =>  {

    const addToList = () => {
        const listItem = document.createElement('li');
        listItem.id = get.projectTitle.value.toLowerCase().split(' ').join('_');
        const listSpan = document.createElement('span');
        const listAnchor = document.createElement('a');
        const projectSelection = document.createElement('option');
        projectSelection.textContent = get.projectTitle.value;
        listAnchor.href = '#';
        listItem.appendChild(listSpan);
        listItem.appendChild(listAnchor);
        listAnchor.textContent = get.projectTitle.value;
        get.projects.appendChild(listItem);
        get.projectSelect.appendChild(projectSelection);
        return {
            listItem
        }
    }
    return {
        addToList
    }
    })();