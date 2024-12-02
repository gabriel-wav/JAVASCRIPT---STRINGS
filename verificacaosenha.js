const senhaCorreta =  "admin123"

const passwordInput = document.getElementById("senha")
const form = document.getElementById("submit")
const resultadoDiv = document.getElementById("resultado")
const togglePasswordBtn = document.getElementById("toggle-password");





form.addEventListener ("submit", function(e)
{e.preventDefault();

const senhaDigitada = passwordInput.value

 if (senhaDigitada === senhaCorreta) {
 resultadoDiv.innerText = "Login realizado!"
 resultadoDiv.className = "sucesso";
 }
else {
resultadoDiv.innerText = "Senha inválida."
resultadoDiv.className = "erro";
}

})