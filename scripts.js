<script>
  // 获取当前页面的文件名
  const currentPage = window.location.pathname.split('/').pop();

  // 找到所有导航链接并遍历
  const links = document.querySelectorAll('.navbar a');
  links.forEach(link => {
    // 如果当前链接的href包含当前页面的文件名
    if (link.href.includes(currentPage)) {
      // 为该链接添加active类
      link.classList.add('active');
    }
  });
</script>
