// 获取当前页面的路径
const currentPage = window.location.pathname;

// 获取所有导航栏链接
const navbarLinks = document.querySelectorAll('.navbar a');

// 遍历所有链接，检查是否与当前页面匹配
navbarLinks.forEach(link => {
    // 如果链接的 href 和当前页面路径匹配，添加 'active' 类
    if (link.href.includes(currentPage)) {
        link.classList.add('active');
    }
});

