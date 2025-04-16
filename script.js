document.addEventListener('DOMContentLoaded', function() {
  const projectsGrid = document.querySelector('.projects-grid');

  fetch('projects.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (!data.projects || !Array.isArray(data.projects)) {
        console.error('Invalid projects data format.');
        projectsGrid.innerHTML = '<p>Could not load projects.</p>';
        return;
      }

      projectsGrid.innerHTML = ''; // Clear placeholder or loading state

      data.projects.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('project-card');

        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add('project-image-wrapper');
        const image = document.createElement('img');
        image.src = project.image || 'images/project-placeholder.svg'; // Use placeholder if no image
        image.alt = project.title;
        image.classList.add('project-image');
        imageWrapper.appendChild(image);

        const content = document.createElement('div');
        content.classList.add('project-content');

        const title = document.createElement('h3');
        title.textContent = project.title;

        const description = document.createElement('p');
        description.textContent = project.description;

        const tagsContainer = document.createElement('div');
        tagsContainer.classList.add('project-tags');
        if (project.technologies && Array.isArray(project.technologies)) {
          project.technologies.forEach(tech => {
            const tag = document.createElement('span');
            tag.classList.add('tag');
            tag.textContent = tech;
            tagsContainer.appendChild(tag);
          });
        }
        
        // Optional: Add link if available
        // const projectLink = document.createElement('a');
        // projectLink.href = project.link || '#';
        // projectLink.textContent = 'View Project';
        // projectLink.target = '_blank';
        // projectLink.classList.add('project-link-button'); // Add appropriate class if needed

        content.appendChild(title);
        content.appendChild(description);
        content.appendChild(tagsContainer);
        // content.appendChild(projectLink);

        card.appendChild(imageWrapper);
        card.appendChild(content);

        projectsGrid.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Error fetching or processing projects:', error);
      projectsGrid.innerHTML = '<p>Error loading projects. Please try again later.</p>';
    });

    // Smooth scrolling for nav links
    document.querySelectorAll('header nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});