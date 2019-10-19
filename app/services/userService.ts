import { IUserRepository } from "../domain/Interfaces/IUserRepository";
import { IUserService } from "./interfaces/IUserService";
import { User } from "../domain/entities/user";

export class UserService implements IUserService{

    private _repository : IUserRepository;

    constructor(repository : IUserRepository) {
        this._repository = repository;
    }

    getRegisteredUsers(): User[] {
        return this._repository.getUsers();
    }

    handleUserRegistration(user: User): User {
        return this._repository.addUser(user);
    }
}