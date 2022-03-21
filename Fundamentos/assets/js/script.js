let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let nomeOk = false;
let emailOk = false;

function validaNome() {
  let txt = document.querySelector("#txtNome");
  if (nome.value.length < 3) {
    txt.innerHTML = "Nome inválido";
  } else {
    txt.innerHTML = "Nome válido";
    nomeOk = true
  }
}

function validaEmail() {
  let txt = document.querySelector("#txtEmail");
  if (email.value.indexOf("@") == -1) {
    txt.innerHTML = "Email inválido";
  } else {
    txt.innerHTML = "Email válido";
    emailOk = true
  }
}

function enviar() {
  if (nomeOk == true && emailOk == true) {
    alert("Formulário enviado!");
  } else {
    alert("Preencha o formulário corretamente");
  }
}
