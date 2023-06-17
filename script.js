const toggleButton = document.getElementsByClassName('toggle-button')[0] /* 0 returns first elemnt of array which is the toggle button*/
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')/* when clicked run a certain function*/
  /* toggles the active class. if it doesnt exist it will add it, if it exists it will remove it*/
})




// Function to create project elements
function createProject(title, imageSrc, description, codeLink, liveLink) {
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project');
  
    const image = document.createElement('img');
    image.src = imageSrc;
    projectContainer.appendChild(image);
  
    const projectTitle = document.createElement('h3');
    projectTitle.textContent = title;
    projectContainer.appendChild(projectTitle);
  
    const projectDescription = document.createElement('p');
    projectDescription.textContent = description;
    projectContainer.appendChild(projectDescription);
  
    const projectLinks = document.createElement('div');
    projectLinks.classList.add('project-links');
  
    const codeButton = document.createElement('a');
    codeButton.href = codeLink;
    codeButton.textContent = 'View Code';
    projectLinks.appendChild(codeButton);
  
    const liveButton = document.createElement('a');
    liveButton.href = liveLink;
    liveButton.textContent = 'Live Demo';
    projectLinks.appendChild(liveButton);
  
    projectContainer.appendChild(projectLinks);
  
    return projectContainer;
  }
  
  // Function to populate projects
  function populateProjects() {
    const projectsContainer = document.getElementById('projects-container');
  
    const projects = [
      {
        title: 'Movie Webpage',
        imageSrc: 'path/to/movie-image.jpg',
        description: 'Built a movie page using an API and only HTML, CSS, and JavaScript.',
        codeLink: 'https://github.com/your-username/movie-project',
        liveLink: 'https://www.example.com/movie-website'
      },
      {
        title: 'Construction Company Website',
        imageSrc: 'path/to/construction-image.jpg',
        description: 'Created a multipage website for a construction company using only HTML, CSS, and JavaScript.',
        codeLink: 'https://github.com/your-username/construction-project',
        liveLink: 'https://www.example.com/construction-website'
      },
      // Add more projects here...
    ];
  
    projects.forEach(project => {
      const projectElement = createProject(project.title, project.imageSrc, project.description, project.codeLink, project.liveLink);
      projectsContainer.appendChild(projectElement);
    });
  }
  
  // Call the function to populate projects
  populateProjects();

  document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
  
    // Show the notification
    var notification = document.getElementById("notification");
    notification.textContent = "Message sent!";
  });
  
  