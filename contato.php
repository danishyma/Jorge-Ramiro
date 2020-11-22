<?php

if(isset($_POST['email']) && !empty($_POST['email'])){

$name = addlashes($_POST['name']);
$email = addlashes($_POST['email']);
$msg = addlashes($_POST['message']);

$to = "emailjorge@algo.com";
$subject = "Contato - Website";
$body = "Nome: ".$nome. "\r\n".
        "Email: ".$email. "\r\n".
        "Mensagem: ".$msg;
$header = "From:emaildodominiodosite@br.com"."\r\n"."Reply-to:".$email."\r\n"."X=Mailer:PHP/".phpversion();

if(mail($to,$subject,$body,$header)){

  echo("Email enviado com sucesso. Em breve entraremos em contato!");

} else{
  echo("O Email não pode ser enviado. Tente mais tarde.");
}

}

?>