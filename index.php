<?php
    include ("index.html");

    $servername="localhost";
    $username="root";
    $password="";
    $dbname="mspoint";

    $conn=new mysqli($servername,$username,$password,$dbname);
    if($conn->connect_error)
    {
        die("Connection Failed: ".$conn->connect_error);
    }
    
    $name = $_POST['nm'];
    $email = $_POST['em'];
    $phone = $_POST['nbr'];
    $password = $_POST['pass'];
    $sql="INSERT INTO `students` (`S. NO`, `NAME`, `EMAIL`, `PHONE`, `PASSWORD`) VALUES (NULL, '$name', '$email', '$phone', '$password')";

    if($conn->query($sql)===True)
    {
        echo "";
    }
    else
    {
        echo "Error" .$sql."<br>".$conn->error;
    }
    $conn->close();
?>