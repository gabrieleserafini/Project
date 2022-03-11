<?php
    require 'connect.php';
    
    $pdo = connect();    
    $queryPosts = $pdo->query('SELECT * FROM posts;');

    if (isset($_GET['recordId'])){
        $recordId = $_GET['recordId'];
        $delete = "DELETE FROM posts WHERE id='$recordId'";;
        if ($delete){
            echo '<script>alert("Record deleted successfully !")</script>';
            echo '<script>window.location.href="post.php";</script>';
        }
      
    }