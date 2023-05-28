const menus = [
    { name: "Home", path: "/" },
    { name: "abouts", path: "/abouts" },
    { name: "projects", path: "/projects" },
    { name: "posts", path: "/posts" },
    { name: "contacts", path: "/contacts" },
];
const projects = [
    {
        id: 1,
        name: "Dự án 1",
        teams: [
            { id: 1, name: "Đạt" },
            { id: 2, name: "Kiên" },
            { id: 3, name: "Trung" },
        ],
    },
    { id: 2, name: "Dự án mẫu" },
    {
        id: 3,
        name: "Dự án tốt nghiệp",
        teams: [
            { id: 1, name: "Đạt" },
            { id: 2, name: "Kiên" },
            { id: 3, name: "Trung" },
        ],
    },
];
export { projects, menus };
