<?php
include_once('db.php');
// Obtener los valores del formulario
$nombre = $_POST['nombre'];
$email = $_POST['email'];

echo "Heavy Metal <br>" ;
echo "$nombre,$email";

$conectar=conn();// ejecuta las conecciones a la base de datos
$sql="INSERT INTO users (nombre , email)
VALUES ('$nombre','$email')";
$result = mysqli_query($conectar , $sql)or trigger_error("Query Failed! SQL- Error: ".mysqli_error($conectar), E_USER_ERROR);

echo "$sql";

?>