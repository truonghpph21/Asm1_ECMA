import "bootstrap/dist/css/bootstrap.min.css";
import { render, router } from "./lib";
import ProjectFage from "./pages/projects";
import HomeFage from "./pages/home";
import DeltailFage from "./pages/deltails";
import Contacts from "./pages/contacts";
import PostFage from "./pages/posts";
import AboutFage from "./pages/abouts";
import NotFound from "./pages/not-founds";
import DeltailsProjects from "./pages/deltails-projects";
import AdminProjectsFage from "./pages/admin/projects";
import AdminAddProjects from "./pages/admin/projects-add";
import AdminEditProjects from "./pages/admin/projects-edit";


const app = document.querySelector('#app')
router.on("/", () => render(HomeFage, app));
router.on('/projects', () => render(ProjectFage, app));
router.on("/deltails", () => render(DeltailFage, app));
router.on("/contacts", () => render(Contacts, app));
router.on('/abouts', () => render(AboutFage, app));
router.on("/posts", () => render(PostFage, app));
router.on("/projects/:id", ({ data }) => render(() => DeltailsProjects(data), app));

//admin page
router.on("/admin/projects/:id/edit", ({ data }) => render(() => AdminEditProjects(data), app));
router.on("/admin/projects/add", () => render(AdminAddProjects, app));
router.on("/admin/projects", () => render(AdminProjectsFage, app));
router.notFound(() => render(NotFound, app));
router.resolve();
