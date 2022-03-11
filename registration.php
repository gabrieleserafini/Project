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
            INSERT INTO users (username, password, email, name, birth) VALUES
                ('{$_POST['username']}','{$_POST['password']}','{$_POST['email']}','{$_POST['name']}','{$_POST['birth']}');
        ");
    } catch(Exception $e) {
        var_dump($e);
    }
    
  /*  try {
        $pdo->query("
            INSERT INTO posts (category, title, content, created_at) VALUES
                ('{$_POST['category']}','{$_POST['title']}','{$_POST['content']}','{$_POST['created_at']}');
        ");
    } catch(Exception $e) {
        var_dump($e);
    }
    */