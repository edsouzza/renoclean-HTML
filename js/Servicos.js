const dados = 
[
  {
     id           : 0,
     title        : "Sofás",
     src          : "assets/images/servicos/servico1.webp",
     description  : "Manter o seu sofá limpo e bem cuidado é essencial para garantir a durabilidade e a aparência do móvel. Estamos aqui para realizar o tratamento e a limpeza do seu sofá de forma eficaz."
  },
  {
     id           : 1, 
     title        : "Colchões",
     src          : "assets/images/servicos/servico2.webp",
     description  : "Manter seu colchão limpo é essencial para uma boa noite de sono e para a saúde geral. A limpeza regular ajuda a remover ácaros, poeira, sujeira e manchas, prolongando a vida útil do colchão."
  },
  {
     id           : 2, 
     title        : "Carpetes",
     src          : "assets/images/servicos/servico3.webp",
     description  : "Manter seu carpete limpo é essencial para a saúde do ambiente e para prolongar a vida útil do material. Um carpete bem cuidado melhora a aparência do espaço e pode contribuir para um ambiente mais saudável."
  },
  {
     id           : 3, 
     title        : "Cortinas",
     src          : "assets/images/servicos/servico4.webp",
     description  : "Manter suas cortinas limpas é essencial para garantir um ar mais saudável dentro de casa. Cortinas podem acumular poeira, ácaros e sujeira ao longo do tempo, por isso é importante limpá-las regularmente."
  }
]

function displayImage(id){    
    if(id === dados[id].id){
      document.querySelector("#nameService").innerHTML  = dados[id].title
      document.querySelector("#srcService").setAttribute("alt", dados[id].title)
      document.querySelector("#srcService").setAttribute("src", dados[id].src)
      document.querySelector("#descService").innerHTML  = dados[id].description
    }    
}