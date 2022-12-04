<?php
  $usuario = $_POST['data'];

  $dadosLogin = json_decode($usuario, true);

  var_dump($dadosLogin);
?>