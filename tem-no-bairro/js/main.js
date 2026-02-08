document.addEventListener('DOMContentLoaded', function() {
  // Função para abrir e fechar o menu
  const btnMenu = document.getElementById('btn-menu');
  const menuMobile = document.getElementById('menu-mobile');
  const overlayMenu = document.getElementById('overlay-menu');

  btnMenu.addEventListener('click', function() {
    menuMobile.classList.toggle('abrir-menu');
    overlayMenu.classList.toggle('ativo');
  });

  overlayMenu.addEventListener('click', function() {
    menuMobile.classList.remove('abrir-menu');
    overlayMenu.classList.remove('ativo');
  });

  // Função para abrir e fechar os submenus
  const submenus = document.querySelectorAll('.submenu');

  submenus.forEach(function(submenu) {
    submenu.parentNode.addEventListener('click', function(event) {
      event.preventDefault();
      submenu.classList.toggle('ativo');
    });
  });

  // Função para a barra de pesquisa
  const inputPesquisa = document.querySelector('input[type="text"]');

  inputPesquisa.addEventListener('input', function(event) {
    const termoPesquisa = event.target.value.toLowerCase().trim();
    const itensMenu = document.querySelectorAll('.sidebar a');

    itensMenu.forEach(function(item) {
      const textoItem = item.textContent.toLowerCase();
      if (textoItem.includes(termoPesquisa)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
