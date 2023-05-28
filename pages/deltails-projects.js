import Header from "../components/Header";
import ProjectInfo from "../components/Projectinfo";
import { projects } from "../data"
import { router } from "../lib";

const DeltailsProjects = ({ id }) => {
    const currentProject = projects.find((project) => project.id == id);
    if (!currentProject) return router.navigate('/projects');

    return `
    ${Header()}
    <div class="project-info">
    ${ProjectInfo(currentProject)}
    </div>
    `;
}
export default DeltailsProjects;