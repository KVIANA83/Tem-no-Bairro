document.addEventListener('DOMContentLoaded', function () {

  /* ==============================
     MENU MOBILE (se existir)
  ============================== */
  const btnMenu = document.getElementById('btn-menu');
  const menuMobile = document.getElementById('menu-mobile');
  const overlayMenu = document.getElementById('overlay-menu');

  if (btnMenu && menuMobile && overlayMenu) {
    btnMenu.addEventListener('click', () => {
      menuMobile.classList.toggle('abrir-menu');
      overlayMenu.classList.toggle('ativo');
    });

    overlayMenu.addEventListener('click', () => {
      menuMobile.classList.remove('abrir-menu');
      overlayMenu.classList.remove('ativo');
    });
  }


  /* ==============================
     SUBMENUS
  ============================== */
  const menuItems = document.querySelectorAll('.sidebar li');

  menuItems.forEach(item => {
    const submenu = item.querySelector('.submenu');

    if (submenu) {
      const link = item.querySelector('a');

      link.addEventListener('click', (e) => {
        e.preventDefault();
        submenu.classList.toggle('ativo');
      });
    }
  });


  /* ==============================
     BARRA DE PESQUISA
  ============================== */
  const inputPesquisa = document.querySelector('.barra-pesquisa');

  if (inputPesquisa) {
    inputPesquisa.addEventListener('input', (event) => {
      const termo = event.target.value.toLowerCase().trim();
      const itens = document.querySelectorAll('.sidebar a');

      itens.forEach(item => {
        const texto = item.textContent.toLowerCase();
        item.style.display = texto.includes(termo) ? 'block' : 'none';
      });
    });
  }


  /* ==============================
     CATÁLOGO DO EMPREENDEDOR
     (simulação local)
  ============================== */
  const formProduto = document.querySelector('.formulario-produto');
  const listaProdutos = document.querySelector('.lista-produtos');

  if (formProduto && listaProdutos) {

    formProduto.addEventListener('submit', function (e) {
      e.preventDefault();

      const nome = document.getElementById('nome').value;
      const descricao = document.getElementById('descricao').value;
      const imagemInput = document.getElementById('imagem');

      const reader = new FileReader();

      reader.onload = function () {
        const produto = document.createElement('div');
        produto.classList.add('produto-item');

        produto.innerHTML = `
          <img src="${reader.result}" alt="${nome}">
          <h3>${nome}</h3>
          <p>${descricao}</p>
        `;

        listaProdutos.appendChild(produto);
      };

      if (imagemInput.files[0]) {
        reader.readAsDataURL(imagemInput.files[0]);
      }

      formProduto.reset();
    });

  }

});
