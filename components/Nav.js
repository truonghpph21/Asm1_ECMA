
import { menus } from "../data";
const Nav = () => {
    return `
    <nav>
   <li>
    ${menus.map((menu) => `<a href="${menu.path}">${menu.name}</a>`).join("")}
    </li>
    </nav>
    `;
}
export default Nav;