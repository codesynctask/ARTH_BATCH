<?php

session_start();

$users = [
    [
        "name" => "Amit Sharma",
        "email" => "amit.sharma@example.com",
        "pass" => "password123"
    ],
    [
        "name" => "Priya Verma",
        "email" => "priya.verma@example.com",
        "pass" => "pass456"
    ],
    [
        "name" => "Rahul Mehta",
        "email" => "rahul.mehta@example.com",
        "pass" => "rahul789"
    ],
    [
        "name" => "Sneha Kapoor",
        "email" => "sneha.kapoor@example.com",
        "pass" => "sneha321"
    ],
    [
        "name" => "Vikas Gupta",
        "email" => "vikas.gupta@example.com",
        "pass" => "vikas654"
    ],
    [
        "name" => "Neha Singh",
        "email" => "neha.singh@example.com",
        "pass" => "neha987"
    ],
    [
        "name" => "Arjun Patel",
        "email" => "arjun.patel@example.com",
        "pass" => "arjun111"
    ],
    [
        "name" => "Kavita Joshi",
        "email" => "kavita.joshi@example.com",
        "pass" => "kavita222"
    ],
    [
        "name" => "Rohit Yadav",
        "email" => "rohit.yadav@example.com",
        "pass" => "rohit333"
    ],
    [
        "name" => "Anjali Rao",
        "email" => "anjali.rao@example.com",
        "pass" => "anjali444"
    ]
];


// storing all users to session
$_SESSION["users"] = $users;

