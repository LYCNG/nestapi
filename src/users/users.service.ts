import { Injectable } from '@nestjs/common';
import { User, Users } from './type';


@Injectable()
export class UsersService {
    private readonly users = Users;

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.name === username);
    }
}
