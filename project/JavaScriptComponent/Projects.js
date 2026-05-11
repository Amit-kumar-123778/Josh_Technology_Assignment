(function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  projects.forEach(function (project) {
    const tagsHTML = project.tags
      .map(function (tag) { return '<span class="tag">' + tag + '</span>'; })
      .join('');

    const card = document.createElement('article');
    card.className = 'project-card';
    card.innerHTML =
      '<img src="' + project.img + '" alt="' + project.title + '" loading="lazy"/>' +
      '<div class="project-card-body">' +
        '<h3>' + project.title + '</h3>' +
        '<p>' + project.desc + '</p>' +
        '<div class="tags">' + tagsHTML + '</div>' +
      '</div>';

    grid.appendChild(card);
  });
})();