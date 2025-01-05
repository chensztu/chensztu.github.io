document.addEventListener("DOMContentLoaded", function () {
    // 获取所有的导航链接
    const navLinks = document.querySelectorAll("ul li a");

    // 获取当前页面的文件名
    const currentPage = window.location.pathname.split("/").pop();

    // 遍历所有链接，添加 active 类
    navLinks.forEach(link => {
        if (link.href.includes(currentPage)) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});
