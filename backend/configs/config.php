<?php 
    require '../vendor/autoload.php';

    $mongodb = new MongoDB\Client("mongodb+srv://huy96qt123:anhhuy123@phone.bibby.mongodb.net/?retryWrites=true&w=majority&appName=Phone");

    function get_database($database) {
        global $mongodb;
        $data = $mongodb->$database; 
        return $data;
    }

    function get_collection($variable, $collection) {
        $data = $variable->$collection;
        return $data;
    }


