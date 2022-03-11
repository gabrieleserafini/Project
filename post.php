<?php
    require 'connect.php';
    
    $pdo = connect();    
    $queryUsers = $pdo->query('SELECT * FROM users;');
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
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
    <script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js" referrerpolicy="origin"></script>

    <title>Post Blog</title>
</head>

<body> 
    <div class="text-white bg-dark mb-5 p-1" >
        <h1>New Post</h1>
    </div>    

    <form class="container mt-4 mb-4 shadow-lg p-3 mb-5 bg-body rounded rounded-3" action="registration-post.php" method="POST">
        <div class="row justify-content-md-center">
            <div class="col-md-12 col-lg-8">
                <label>Category:</label>
                <input type="text" class="form-control" name="category" placeholder="Category...">
                <label>Title:</label>
                <input type="text" class="form-control" name="title" placeholder="Title..." required>
                <label>Content:</label>
                <div class="form-group">
                    <textarea name="content" id="" class="col" rows="10"required></textarea>
                    <select name="user" class="form-control">
                    <option>- Select User -</option>
                    <?php
                    foreach($queryUsers as $row) {
                    echo "<option><span>{$row["id"]} </span> {$row["username"]}</option>";
                    }
                    ?>  
                    </select>
                </div>
                <button class="btn btn-primary">Submit</button>
            </div>
        </div>
    </form>

    <script src="post.js"></script>
</body>

</html>




























<!--
<select name="user">
    <option value="{$user['id']}">{$user['username]}</option>
</select>


$_POST['user']
$_POST['content']<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js" referrerpolicy="origin"></script>

<script>
  tinymce.init({
    selector: 'textarea#editor',
    menubar: false
  });
</script> 
-->