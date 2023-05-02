import { get, deleteMaincontent } from "./DOM_module";
import { events } from "./event_handler";


console.log('proj')



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

        const projectArray = [];
        const projectId = `${get.projectTitle.value}`;
        const existingProject  = document.getElementById(projectId);

        if (existingProject) {
            return;
        }
        get.projectListSidebar.childNodes.forEach(child => {
            if (child.nodeName !== "#text"){
            projectArray.push(child);
            }
        });

        const listItem = document.createElement('li');
        listItem.id = get.projectTitle.value.toLowerCase().split(' ').join('-');
        const listSpan = document.createElement('span');
        const listAnchor = document.createElement('a');
        const projectSelection = document.createElement('option');
        projectSelection.textContent = get.projectTitle.value;
        listAnchor.href = '#';
        listItem.appendChild(listSpan);
        listItem.appendChild(listAnchor);
        listAnchor.textContent = get.projectTitle.value;
        get.projectListSidebar.appendChild(listItem);
        projectArray.push(listItem);
        get.projectSelect.appendChild(projectSelection);
       
        events().addProjectListeners(projectArray);

        return {
            listItem,
            projectArray
        }
        
    }
    return {
        addToList,
      
    }
    })();