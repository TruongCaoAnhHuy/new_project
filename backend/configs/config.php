<?php 
    function connect_api($url) {
        $ch = curl_init();

        // Set CURL options
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        // Execute the CURL session and get the response
        $response = curl_exec($ch);

        // Close the CURL session
        curl_close($ch);

        return $response;
    }

