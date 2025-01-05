// 在页面加载时，为当前页面链接添加 active 类
document.addEventListener('DOMContentLoaded', function() {
    var currentUrl = window.location.href;  // 获取当前页面的 URL
    var links = document.querySelectorAll('nav ul li a');  // 获取所有导航链接

    links.forEach(function(link) {
        // 如果链接的 href 和当前页面 URL 匹配，给该链接添加 active 类
        if (currentUrl.includes(link.href)) {
            link.classList.add('active');
        }
    });
});
