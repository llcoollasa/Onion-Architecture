"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserService = /** @class */ (function () {
    function UserService(repository) {
        this._repository = repository;
    }
    UserService.prototype.getRegisteredUsers = function () {
        return this._repository.getUsers();
    };
    UserService.prototype.handleUserRegistration = function (user) {
        return this._repository.addUser(user);
    };
    return UserService;
}());
exports.UserService = UserService;
