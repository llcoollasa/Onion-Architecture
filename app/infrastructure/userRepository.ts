import { IUserRepository } from '../domain/Interfaces/IUserRepository';
import { User } from '../domain/entities/user';

export class UserRepository implements IUserRepository{

    addUser(user: User): User {
        try {
            // Saving imeplementation code goes here
            console.log('Saving User', user);
            
            return user;
        } catch (error) {
            return user;
        }
    }

    getUsers(): User[] {
        let users = [];

        users.push(new User('lasantha', 'password'));
        users.push(new User('indrajith', 'password'));

        return users;
    }
}