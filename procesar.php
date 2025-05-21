<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_SPECIAL_CHARS);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $mensaxe = filter_input(INPUT_POST, 'mensaxe', FILTER_SANITIZE_SPECIAL_CHARS);

    $erros = [];

    if (empty($nome) || strlen($nome) < 2) {
        $erros[] = "O nome é obrigatorio e debe ter como mínimo 2 caracteres.";
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $erros[] = "O correo electrónico non é válido.";
    }

    if (empty($mensaxe) || strlen($mensaxe) < 10) {
        $erros[] = "A mensaxe é obrigatoria e debe ter polo menos 10 caracteres.";
    }

    if (!empty($erros)) {
        echo "<div class='alert alert-danger'><h5>⚠️ Erros detectados:</h5><ul>";
        foreach ($erros as $erro) {
            echo "<li>" . htmlspecialchars($erro) . "</li>";
        }
        echo "</ul></div>";
        exit;
    }

    $data = date("Y-m-d H:i:s");
    $liña = "$data | Nome: $nome | Email: $email | Mensaxe: $mensaxe" . PHP_EOL;
    file_put_contents("mensaxes.txt", $liña, FILE_APPEND);

    echo "<div class='alert alert-success' id='confirmacion'>";
    echo "<h5>✅ Mensaxe enviada correctamente!</h5>";
    echo "<p>Grazas, <strong>" . htmlspecialchars($nome) . "</strong>. Contactaremos contigo ao correo <strong>" . htmlspecialchars($email) . "</strong>.</p>";
    echo "</div>";
}
?>
