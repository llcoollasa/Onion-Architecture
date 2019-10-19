"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var userService_1 = require("./services/userService");
var userRepository_1 = require("./infrastructure/userRepository");
var user_1 = require("./domain/entities/user");
var app = express();
app.get('/', function (req, res) {
    var userService = new userService_1.UserService(new userRepository_1.UserRepository());
    var users = userService.getRegisteredUsers();
    res.send(users);
});
app.get('/save', function (req, res) {
    var user = new user_1.User('Next User', 'newpassword');
    var userService = new userService_1.UserService(new userRepository_1.UserRepository());
    var newUser = userService.handleUserRegistration(user);
    res.send(newUser);
});
app.listen(3000, function () {
    console.log('TS app listening on port 3000!');
});
