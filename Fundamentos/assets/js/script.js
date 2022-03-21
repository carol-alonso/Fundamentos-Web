let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");

function validaNome() {
  let txt = document.querySelector("#txtNome");
  if (nome.value.length < 3) {
    txt.innerHTML = "Nome inválido";
  } else {
    txt.innerHTML = "Nome válido";
  }
}

function validaNome() {
  let txt = document.querySelector("#txtEmail");
  if (email.value.indexOf('@') == -1) {
    txt.innerHTML = "Email inválido";
  } else {
    txt.innerHTML = "Email válido";
  }
}
