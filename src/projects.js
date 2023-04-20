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
        const listSpan = document.createElement('span');
        const listAnchor = document.createElement('a');
        listAnchor.href = '#';
        listItem.appendChild(listSpan);
        listItem.appendChild(listAnchor);
        listAnchor.textContent = get.projectTitle.value;
        get.projects.appendChild(listItem);
        return {
            listItem
        }
    }
    return {
        addToList
    }
    })();