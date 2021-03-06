
// fetch("/api/projects").then(res => res.json()).then(console.log);

// this is client side and uses DOM instead of JQuery
// it is scalable and shows the result on the page
(async function getProjects() {
    try {
        const response = await fetch("/api/projects");
        const result = await response.json();

        const projectsDiv = document.getElementById("projects");
        
        result.projects.map(project => {
            const projectDiv = document.createElement("div");

            const titleHeader = document.createElement("h2");
            titleHeader.classList.add("project-title");
            titleHeader.innerText = project.title;

            const descriptionP = document.createElement("p");
            descriptionP.classList.add("project-description");
            descriptionP.innerText = project.description;

            projectDiv.appendChild(titleHeader);
            projectDiv.appendChild(descriptionP);
            projectsDiv.appendChild(projectDiv);
        });

        /* 
        show the result on the page...  
        do it in a scalable way that works even if you add new projects 
        */

    } catch (error) {
        console.log(error);
    }
})();

// cerate a contact page and serve it and create a form on the page as well
