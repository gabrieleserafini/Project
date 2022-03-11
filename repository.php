<?php
    require 'connect.php';
    
    $pdo = connect();    
    $queryPosts = $pdo->query('SELECT * FROM posts;');
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"
        crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script>

    <title>All Posts</title>
</head>

<body>
  <div class="text-white bg-dark mb-5 p-1" >
    <h1>Repository</h1>
  </div>
    
  <ol class="list-group list-group-numbered">
    <?php
        foreach($queryPosts as $row) {
            echo " 
              <li class=\"list-group-item d-flex justify-content-between align-items-start shadow-lg p-3 mb-5 bg-body rounded rounded-3\">
                <div class=\"ms-2 me-auto\">
                  <div><strong>{$row["title"]}</strong>
                  </div>{$row["content"]}
                  <small class=\"d-flex justify-content-end\">{$row["category"]}</small>
                  </div>
                  <a href=\"http://localhost/day2/src/delete.php?recordId={$row["id"]}\" class=\"btn btn-danger btn-sm\">Delete</a>
                  
              </li>
            ";
        }
    ?>

    </ol>
</body>

</html>