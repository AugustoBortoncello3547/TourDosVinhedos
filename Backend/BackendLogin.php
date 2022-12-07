<?php

require "Sql.php";

$usuario = isset($_POST['data']) ? $_POST['data'] : null;

$dadosLogin = json_decode($usuario, true);

$DB = new Sql();

$email = $dadosLogin['email'];
$password = $dadosLogin['password'];

$sql = "SELECT id from person where email = '$email' and password = '$password'";
$user = $DB->select($sql);

echo isset($user[0]) ? $user[0]['id'] : null;
