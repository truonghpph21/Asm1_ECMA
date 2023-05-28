// import { projects } from "../../data";
import { useEffect, router } from "../../lib";

const AdminEditProjects = ({ id }) => {
    // lấy dữ liệu từ localStorage
    const projects = JSON.parse(localStorage.getItem("projects")) || [];
    // tìm proejcts theo id
    const currentProject = projects.find((project) => project.id == id);
    console.log(currentProject)
    useEffect(() => {
        const form = document.getElementById("form-add");
        const projectName = document.getElementById("project-name");
        form.addEventListener("submit", function (e) {
            // sự kiện chặn reload lại trình duyệt
            e.preventDefault();
            //tạo ra projects mới
            const newProject = {
                id: currentProject.id,
                name: projectName.value,
            };
            const newProjects = projects.map((project) => {
                // nếu project.id == newProject.id thì trả về mảng đã cập nhật phần tử mới
                // ngược lại trả về mảng không cập nhật gì
                return project.id == newProject.id ? newProject : project;
            });
            //
            localStorage.setItem("projects", JSON.stringify(newProjects));
            router.navigate("/admin/projects");
        });
    });


    return `<div class="container">
            <h1>Cập nhật sản phẩm</h1>
                <form action="" id="form-add">
                    <div class="form-group">
                        <label for="" class="form-label">Tên dự án</label>
                        <input type="text" class="form-control" id="project-name" value="${currentProject.name}" />
                    </div>
                    <button class="btn btn-primary">Cập nhật</button>
                </form>
    </div>`;
}
export default AdminEditProjects;