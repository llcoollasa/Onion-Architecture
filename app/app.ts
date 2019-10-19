import express = require('express');
import { UserService } from './services/userService';
import { UserRepository } from './infrastructure/userRepository';
import { User } from './domain/entities/user';

const app: express.Application = express();

app.get('/', function (req, res) {
    const userService = new UserService(new UserRepository());
    const users = userService.getRegisteredUsers();

    res.send(users);
});

app.get('/save', function (req, res) {

    const user = new User('Next User', 'newpassword');    
    const userService = new UserService(new UserRepository());
    const newUser = userService.handleUserRegistration(user);

    res.send(newUser);
});

app.listen(3000, function () {
    console.log('TS app listening on port 3000!');
});