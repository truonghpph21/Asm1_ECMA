// import { projects } from "../../data";
import { useEffect, useState } from "../../lib";

const AdminProjectsFage = () => {
  /**
   * Các bước thực hiện:
   * - Bước 1: Thiết lập state
   * - Bước 2: Lấy dữ liệu từ state và hiển thị ra ngoài
   * - Bước 3:
   *  + Sử dụng useEffect
   *  + Lắng nghe sự kiện click vào nút remove
   */

  // B1:TẠO 1 biến data gán với giá trị là rỗng
  const [data, setData] = useState([]);
  // Bước 1: Khởi tạo biến data và hàm setData, giá trị là 1 mảng rỗng
  useEffect(() => {
    const projects = JSON.parse(localStorage.getItem('projects')) || [];
    setData(projects);
    //truyền tham số thứ 2
  }, []);
  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");

    for (let btn of btns) {
      btn.addEventListener('click', function () {
        //lấy id từ data-id của button
        const id = btn.dataset.id;
        //lọc ra các phần tử có id khác với id của button
        const newProjects = data.filter((project) => project.id != id);
        // lưu vào localStorage
        localStorage.setItem("projects", JSON.stringify(newProjects));
        // Gán lại giá trị cho biến data
        setData(newProjects);
      })
    }
  })
  //render ra ngoài màn hình
  return `
    <table class="table table-bordered">
    <thead>
      <tr>
        <th>#</th>
        <th>name</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    ${data
      .map((project, index) => `
    <tr>
        <td>${index + 1}</td>
        <td>${project.name}</td>
        <td with="150"><button class="btn btn-remove btn-danger" data-id="${project.id}">Remove</button>
        <a href="/admin/projects/${project.id}/edit">Sửa</a>
        </td>
    </tr>
    `).join("")}
    
    </tbody>

  </table>
    `;
}
export default AdminProjectsFage;