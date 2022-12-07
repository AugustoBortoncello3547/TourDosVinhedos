<?php

require "Sql.php";

$usuarioCadastro = isset($_POST['data']) ? $_POST['data'] : null;

$dadosCadastro = json_decode($usuarioCadastro, true);

$DB = new Sql();

$name = $dadosCadastro['nome'];
$email = $dadosCadastro['email'];
$password = $dadosCadastro['password'];

$encrypt =  md5('tour_dos_vinhedos_secret' . $password);

$sql = "INSERT INTO person (name, email, password) VALUES ('$name','$email','$encrypt')";
$person_id = $DB->insert($sql);


if ($dadosCadastro['ehFuncionario'] == "N") {
    $country = isset($dadosCadastro['pais']) ? $dadosCadastro['pais'] : null;
    $sql = "INSERT INTO client (person_id, country) VALUES ('$person_id', '$country')";
} else {
    $job = isset($dadosCadastro['ocupacao']) ? $dadosCadastro['ocupacao'] : null;
    $sql = "INSERT INTO employee (person_id, job) VALUES ('$person_id', '$job')";
}

$DB->query($sql);
