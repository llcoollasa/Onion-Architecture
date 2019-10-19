import { User } from '../entities/user';

export interface IUserRepository {
    getUsers(): User[];
    addUser(user: User): User;
}
