<?php

namespace App\Controllers;

class Guest extends BaseController {
    public function index()
    {
        $status = [
            'title' => ''
        ];

        return
        view('templates/header', $status) . 
        view('templates/navbar-guest') . 
        view('guest/index') . 
        view('templates/footer');
    }
}