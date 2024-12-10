document.addEventListener("DOMContentLoaded", function () {
  // armazenar os dados
  let bancoDeDados = [];

  const form = document.getElementById("client-form");
  const formContainer = document.getElementById("form-container");
  const tableContainer = document.getElementById("table-container");
  const backButton = document.getElementById("back-button");

  // Função para exibir os dados na tabela
  function exibirDadosNaTabela() {
    const tableBody = document.getElementById("client-data-body"); 
    tableBody.innerHTML = "";


    bancoDeDados.forEach((dados) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${dados.name}</td>
        <td>${dados.email}</td>
        <td>${dados.phone}</td>
        <td>${dados.observation}</td>
      `;
      tableBody.appendChild(row);
    });

    tableContainer.classList.remove("hidden");
  }

  // Evento de envio do formulário
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const dadosFormulario = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      observation: document.getElementById("observation").value,
    };

    bancoDeDados.push(dadosFormulario);

    exibirDadosNaTabela();

    formContainer.classList.add("hidden");

    form.reset();
  });

  // Evento do botão "Voltar" para esconder a tabela e voltar ao formulário
  backButton.addEventListener("click", function () {
    tableContainer.classList.add("hidden");
    formContainer.classList.remove("hidden");
  });
});
