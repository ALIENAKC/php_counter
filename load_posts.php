<?php
/*
$posts = [
    [
        "id" => 1,
        "user" => "Andrews",
        "title" => "PHP",
        "content" => "PHP HyperText Preprocessor"
    ],
    [
        "id" => 2,
        "user" => "Adams",
        "title" => "GCC",
        "content" => "GNU Compiler Collection"
    ],
    [
        "id" => 3,
        "user" => "Garrett",
        "title" => "TCP",
        "content" => "Transmission Control Protocol"
    ]
];
*/

$posts_json = file_get_contents("posts.json");
//$post = json_decode($posts_json, true);

echo $posts_json;









