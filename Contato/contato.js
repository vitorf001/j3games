document.getElementById("contactform").addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById( "name" ).value;
  const email = document.getElementById( "email" ).value;
  const cpf = document.getElementById( "cpf" ).value;

  function validaCPF(cpf) {
    if (typeof cpf !== 'string') return false;
    cpf = cpf.replace(/[\s.-]*/g, '');
    if (cpf.length !== 11) return false;

    let sum = 0;
    let remainder;

    for (let i = 1; i <= 9; i++) {
      sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    remainder = (sum * 10) % 11;
    if ((remainder === 10) || (remainder === 11)) {
      remainder = 0;
    }

    if (remainder !== parseInt(cpf.substring(9, 10))) return false;

    sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    remainder = (sum * 10) % 11;
    if ((remainder === 10) || (remainder === 11)) {
      remainder = 0;
    }

    if (remainder !== parseInt(cpf.substring(10, 11))) return false;

    return true;
  }

  function validaEmail(email) {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  }

  const cpfValido = validaCPF(cpf);
  const emailValido = validaEmail(email);

  const cpfError = document.getElementById("cpfError");
  const emailError = document.getElementById("emailError");

  cpfError.textContent = cpfValido ? "" : "CPF inválido";
  emailError.textContent = emailValido ? "" : "Email inválido";

  if (!cpfValido || !emailValido) {
    return;
  }

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
    Nome: ${nome}<br>
    Email: ${email} (${emailValido ? "Válido" : "Inválido"})<br>
    CPF: ${cpf} (${cpfValido ? "Válido" : "Inválido"})<br>
  `;
});
