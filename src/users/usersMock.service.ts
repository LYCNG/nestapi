import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { Point } from '../entities/point.entity';
import { IUsersService } from './type';


@Injectable()
export class UsersMockService implements IUsersService {
    private users: User[] = [
        {
            id: '1',
            username: 'admin',
            password: 'admin123',
            role: 'admin',
            points: 100,
            createdAt: new Date(),
        },
        {
            id: '1',
            username: 'user',
            password: 'user123',
            role: 'user',
            points: 100,
            createdAt: new Date(),
        }
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }

    async findOneTest(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }

    async createUser(username: string, role: 'admin' | 'user', password: string): Promise<User> {
        const newUser: User = {
            id: (this.users.length + 1).toString(),
            username,
            role,
            password,
            points: 0,
            createdAt: new Date(),
        };
        this.users.push(newUser);
        return newUser;
    }

    async addPoint(userId: string, points: number): Promise<User> {
        const user = this.users.find(u => u.id === userId);
        if (!user) throw new Error('User not found');
        user.points += points;
        return user;
    }

    async getUserWithPoints(userId: string): Promise<User> {
        const user = this.users.find(u => u.id === userId);
        if (!user) throw new Error('User not found');
        return user;
    }
}