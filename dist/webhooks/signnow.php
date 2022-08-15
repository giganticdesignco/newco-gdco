<?php
$servername = "localhost";
$username = "wh_flywheel";
$password = "h5yQr#796";
$dbname = "flywheel_webhooks";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // fetch RAW input
    $json = file_get_contents('php://input');

    // decode json
    $object = json_decode($json);

    // expecting valid json
    if (json_last_error() !== JSON_ERROR_NONE) {
        die(header('HTTP/1.0 415 Unsupported Media Type'));
    }

    /**
     * Do something with object, structure will be like:
     * $object->accountId
     * $object->details->items[0]['contactName']
     */
	
	$sql = "INSERT INTO webhooks (document_id, user_id, timestamp)
	VALUES ('".$object->content->document_id."', '".$object->content->user_id."', ".$object->meta->timestamp.")";
	
    // dump to file so you can see
    file_put_contents('document.test.txt', print_r($object->content->document_id, true));
    file_put_contents('user.test.txt', print_r($object->content->document_id, true));
    file_put_contents('timestamp.test.txt', print_r($object->meta->timestamp, true));
}


//$sql = "INSERT INTO webhooks (id, document_id, user_id, timestamp)
//VALUES (1, 'fd74be2fe02d4ee4b98c7c625cb10fc0a7d605f8', '6db486e392934e51921c8ee8c4b736c22042d235', 1659108624)";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
