<?php
    $db = "blog";
    $hostname = "localhost:3306";
    $username = "root";
    $password = "";

    try {
        $pdo = new PDO(
            "mysql:host=$hostname;dbname=$db",
            $username,
            $password
        );
    } catch(Exception $e) {
        echo "Errore!";
        var_dump($e);
    }

    try {
        $pdo->query("
            INSERT INTO posts (category, title, content) VALUES
                ('{$_POST['category']}','{$_POST['title']}','{$_POST['content']}');
        ");
    } catch(Exception $e) {
        var_dump($e);
    }