<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="author" content="Isai Tapia, comohacerlo72@gmail.com">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>Reomendación enviada | como hacerlo</title>
    <!--STYLE-->
    <link rel="stylesheet" href="seccionescss/recom.css">
    <!--FONTS-->
    <link href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&display=swap" rel="stylesheet">
    <!--ICONO-->
    <link rel="icon" href="images/Logo_png.ico">
</head>
<body>
<?php
    //conectamos Con el servidor
    $host ="localhost";
    $user ="root";
    $pass ="";
    $db="recomendacion";

    //funcion llamada conexion con (dominio,usuarios,contraseña,base_de_datos)
    $con = mysqli_connect($host,$user,$pass,$db)or die("Problemas al conectar con la base de datos.");
    mysqli_select_db($con,$db)or die("Problemas al conectar con la base de datos");

    //recuperar las variables
    $tema=$_POST['tema'];
    $link=$_POST['link'];
    //hacemos la sentencia de sql
    $sql="INSERT INTO datos VALUES('$tema','$link')";
    //ejecutamos la sentencia de sql
    $ejecutar=mysqli_query($con,$sql);
    //verificamos la ejecucion
    if(!$ejecutar){
        echo"<h1>Hubo algun error</h1> <a href='index'>Volver al inicio</a>";
    }else{
        echo"<h1>Datos enviados correctamente.</h1> <a href='index'>Volver al inicio</a>";
    }
?>
</body>
</html>

