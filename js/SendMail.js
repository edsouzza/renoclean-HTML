function sendMail() {
  var params = {
    name    : document.getElementById("name").value,
    email   : document.getElementById("email").value,
    message : document.getElementById("message").value,
  };

  const serviceID  = "service_l1wug9b";
  const templateID = "template_xn34mya";

  emailjs
    .send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value    = "";
        document.getElementById("email").value   = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Seu e-mail foi enviado com sucesso, retornaremos brevemente!")
    })
    .catch(err=>console.log(err));

}