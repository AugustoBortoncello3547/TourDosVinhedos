<?php
  $usuarioCadastro = $_POST['data'];

  $dadosCadastro = json_decode($usuarioCadastro, true);

  var_dump($dadosCadastro);
?>