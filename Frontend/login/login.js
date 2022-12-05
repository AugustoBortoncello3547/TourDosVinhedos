$(document).ready(() => {
	$("#formLogin").on('submit', () => {
		const email = $("#emailInput").val();
		const password = $("#passwordInput").val();

		var usuario = {
			email: email,
			password: password
		};

		dadosLogin = JSON.stringify(usuario);

		$.ajax({
			url: '../../Backend/BackendLogin.php',
			type: 'POST',
			data: {data: dadosLogin},
			success: function(result){
			  // Redirecionar para a tela inicial
			  console.log(result);
			},
			error: function(jqXHR, textStatus, errorThrown) {
			  // Exibir algum erro caso ocorra
			  console.log(jqXHR, textStatus, errorThrown);
			}
		  });
	});
});