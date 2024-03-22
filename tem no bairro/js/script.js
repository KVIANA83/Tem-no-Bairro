
document.addEventListener("DOMContentLoaded", function() {
  // Barra de pesquisa
  const searchBar = document.querySelector('input[type="text"]');
  searchBar.addEventListener('keyup', function(event) {
    const searchTerm = event.target.value.toLowerCase();
    const categoriaIcons = document.querySelectorAll('.categoria-icon');

    categoriaIcons.forEach(icon => {
      const text = icon.querySelector('p').textContent.toLowerCase();
      if (text.includes(searchTerm)) {
        icon.style.display = 'block';
      } else {
        icon.style.display = 'none';
      }
    });
  });

document.addEventListener("DOMContentLoaded", function() {
  // Menu lateral
  const sidebarItems = document.querySelectorAll('.sidebar > ul > li');

  sidebarItems.forEach(item => {
    const submenu = item.querySelector('.submenu');
    if (submenu) {
      item.addEventListener('mouseenter', () => {
        submenu.style.display = 'block';
      });

      item.addEventListener('mouseleave', () => {
        submenu.style.display = 'none';
      });
    }
  });
});

