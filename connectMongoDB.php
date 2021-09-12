<?php
//$client = new MongoDB\Client('mongodb+srv://admin:admin@wink.lo4nn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
$ok = false;
$message = array();
//$db = $client->AnalysisData;
//$collection = $db->classification;

// if($client->connected)
// {
//     $ok = true;
// }
$message[] = "hi";
//$username = htmlentities($_POST['username']);
//$password = htmlentities($_POST['password']);

// if (!isset($username) || empty($username))
// {
//     $ok = false;
//     $message[] = 'Username cannot be empty';
// }
// if (!isset($password) || empty($password))
// {
//     $ok = false;
//     $message[] = 'Password cannot be empty';
// }

echo json_encode
(
    array
    (
        'ok' => $ok,
        'messages' => $message
    )
);
?>