<?php // for MailChimp API v3.0

include('MailChimp.php');  // path to API wrapper downloaded from GitHub

use \DrewM\MailChimp\MailChimp;

function storeAddress() {
    $key        = "651d582a46bcafbf0fc67caca31f0933-us19";
    $list_id    = "7b33790e97";

    $mc = new MailChimp($key);

    // add the email to your list
    $result = $mc->post('/lists/'.$list_id.'/members', array(
            'email_address' => $_POST['email'],
            //'status'        => 'pending'     // double opt-in
             'status'     => 'subscribed'  // single opt-in
        )
    );

    return json_encode($result);

}

// If being called via ajax, run the function, else fail

if ($_POST['ajax']) { 
    echo storeAddress(); // send the response back through Ajax
} else {
    echo 'Method not allowed - please ensure JavaScript is enabled in this browser';
}