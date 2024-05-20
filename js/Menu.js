/*Por se tratar de varias paginas com o mesmo menu  
necessario deixar a class active da propria pagina*/

document.addEventListener('DOMContentLoaded', function() {  
  // Selecionar todos os itens de menu
  var menuItems = document.querySelectorAll('.nav-link');

  // Loop para encontrar e adicionar a classe 'active' ao item correspondente
  menuItems.forEach(function(item) {    

        //adiconando evento click em todos os links
        item.addEventListener('click', function() {

        // Remover a classe 'active' de todos os itens de menu ao clicar em qualquer um deles
        menuItems.forEach(function(item) {
          item.classList.remove('active');
        });

        // Adicionar a classe 'active' ao item clicado
        this.classList.add('active');
      
      });
  });
});