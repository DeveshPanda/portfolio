import { fetchJSON, renderProjects, fetchGitHubData } from '/portfolio/global.js';
const projects = await fetchJSON('/portfolio/lib/projects.json');
const latestProjects = projects.slice(0, 3);
const projectsContainer = document.querySelector('.projects');
renderProjects(latestProjects, projectsContainer, 'h2');

const githubData = await fetchGitHubData('DeveshPanda');