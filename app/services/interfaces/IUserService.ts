import { User } from "../../domain/entities/user";

export interface IUserService {
    getRegisteredUsers(): User[];
    handleUserRegistration(user : User): User;
}