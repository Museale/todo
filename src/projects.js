import { getByID, deleteMaincontent } from "./DOM_module";

export const renderProjects = () =>  {
    const projectContent = document.createElement('div');
    projectContent.classList.add('active-page');
    getByID.mainContent.appendChild(projectContent);

    const createContent = () => {
        const projectHeader = document.createElement('h2');
        projectHeader.textContent = 'Projects';

        const projectUl = document.createElement('ul');
        projectUl.id = 'project-list';
        projectContent.appendChild(projectUl);

        const listItems = ['Personal', 'Work', 'High Priority'];
        
        listItems.forEach(li => {
            const item = document.createElement('li');
            item.textContent = li;
            projectUl.appendChild(item);
        })

      createContent();
};




}