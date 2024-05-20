const dados = 
[
  {
     id    : 0,
     title : "Sofás",
     src   : "assets/images/servicos/servico1.webp"
  },
  {
     id    : 1, 
     title : "Colchões",
     src   : "assets/images/servicos/servico2.webp"
  },
  {
     id    : 2, 
     title : "Carpetes",
     src   : "assets/images/servicos/servico3.webp"
  },
  {
     id    : 3, 
     title : "Cortinas",
     src   : "assets/images/servicos/servico4.webp"
  }
]

function displayImage(id){    
    if(id === dados[id].id){
      document.querySelector("#nameService").innerHTML  = dados[id].title
      document.querySelector("#srcService").setAttribute("alt", dados[id].title)
      document.querySelector("#srcService").setAttribute("src", dados[id].src)
    }    
}