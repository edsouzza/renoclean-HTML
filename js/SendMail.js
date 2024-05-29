function sendMail() {
  var name    = document.getElementById("name").value;
  var email   = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Validação de preenchimento dos campos
  if (!name || !email || !message) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Validação do formato do e-mail
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Por favor, insira um endereço de e-mail válido.");
    return;
  }

  var params = {
    name    : name,
    email   : email,
    message : message,
  };

  const serviceID  = "service_l1wug9b";
  const templateID = "template_xn34mya";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value    = "";
      document.getElementById("email").value   = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Seu e-mail foi enviado com sucesso, retornaremos brevemente!");
    })
    .catch((err) => console.log(err));
}
