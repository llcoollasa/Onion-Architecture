"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("../domain/entities/user");
var UserRepository = /** @class */ (function () {
    function UserRepository() {
    }
    UserRepository.prototype.addUser = function (user) {
        try {
            // Saving imeplementation code goes here
            console.log('Saving User', user);
            return user;
        }
        catch (error) {
            return user;
        }
    };
    UserRepository.prototype.getUsers = function () {
        var users = [];
        users.push(new user_1.User('lasantha', 'password'));
        users.push(new user_1.User('indrajith', 'password'));
        return users;
    };
    return UserRepository;
}());
exports.UserRepository = UserRepository;
