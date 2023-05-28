import Header from "../components/Header";
import ProjectList from "../components/ProjectsList";

const ProjectFage = () => {
    return `
    ${Header()}
    <h1>ProjectsFage</h1>
    <div class="projects">
        ${ProjectList()}
    </div>
    `;
}
export default ProjectFage;