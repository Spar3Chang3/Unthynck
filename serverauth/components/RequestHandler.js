const fs = require('fs');
const express = require('express');
const {response} = require("express");
const server = express();
const port = 3000;
const loginDataPath = '/data/login-data.json';

let logins = [];
fetch(loginDataPath).then(res => {
    logins = res.json();
}).catch(err => {
    logins = [];
});

//add usernames array

server.get('/', (req, res) => {
    res.redirect('/login');
});

server.get('/login', (req, res) => {
    if (req.method === 'POST') {
        let username = req.get('username');
        let password = req.get('password');


    } else {

    }
});