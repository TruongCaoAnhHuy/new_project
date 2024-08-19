<?php
    function get_user(){
        $data = get_collection(get_database('Users'), 'users');
        $users = $data->find([]);

        foreach ($users as $user) {
            return $user;
        }
    }