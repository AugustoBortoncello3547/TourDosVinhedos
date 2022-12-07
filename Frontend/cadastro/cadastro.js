$(document).ready(() => {
  $('#formCadastro').on('submit', () => {
    const email = $('#email').val()
    const password = $('#password').val()
    const nome = $('#nome').val()
    const dataNasc = $('#dataNasc').val()
    const pais = $('#country').val()
    const ocupacao = $('#job').val()
    const ehFuncionario = $('#e_funcionario').is(':checked') ? 'S' : 'N'

    var usuarioCadastro = {
      nome: nome,
      email: email,
      password: password,
      dataNascimento: dataNasc,
      pais: pais,
      ocupacao: ocupacao,
      ehFuncionario: ehFuncionario,
    }

    dadosCadastro = JSON.stringify(usuarioCadastro)

    $.ajax({
      url: '../../Backend/BackendCadastro.php',
      type: 'POST',
      data: { data: dadosCadastro },
      success: function (result) {
        // Redirecionar para a tela inicial
        console.log(result)
        window.location.href = '/TourDosVinhedos/Frontend/login/login.html'
      },
      error: function (jqXHR, textStatus, errorThrown) {
        // Exibir algum erro caso ocorra
        console.log(jqXHR, textStatus, errorThrown)
      },
    })
  })
})
