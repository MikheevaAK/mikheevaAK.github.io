<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');    
    $mail->IsHTML(true);
        
    $mail->setFrom('nast967@gmail.com', 'Заявка с сайта');
    $mail->AddAddress('nast967@gmail.com');
    $mail->Subject = 'Заявка с сайта ';

    $body = '<h1>Заявка с сайта от: </h1>';

        if(trim(!empty($_POST['name']))) {
            $body.='<p><stromg>Имя:</strong> '.$_POST['name'].'</p>';
        }
        if(trim(!empty($_POST['phone']))) {
            $body.='<p><stromg>Телефон:</strong> '.$_POST['phone'].'</p>';
        }
        if(trim(!empty($_POST['comment']))) {
            $body.='<p><stromg>Комментарий:</strong> '.$_POST['comment'].'</p>';
    }

    $mail->Body = $body;

    if (!$mail->send()) {
        $message = 'Ошибка!';
    } else {
        $message = 'Данные отправлены!';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);

 ?>