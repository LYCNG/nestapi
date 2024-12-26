import { User } from "src/entities/user.entity";


export interface IUsersService {
    findOne(username: string): Promise<User | undefined>;
    findOneTest(username: string): Promise<User | undefined>;
    createUser(username: string, role: 'admin' | 'user', password: string): Promise<User>;
    addPoint(userId: string, points: number): Promise<User>;
    getUserWithPoints(userId: string): Promise<User>;
}

export const Users: User[] = [
    {
        id: '1',
        username: 'john',
        role: 'user',
        password: 'changeme',
        createdAt: new Date(),
        points: 100,
    },
    {
        id: '2',
        username: 'maria',
        role: 'user',
        password: 'guess',
        createdAt: new Date(),
        points: 200,
    },
    {
        id: '3',
        username: 'admin',
        role: 'admin',
        password: 'admin',
        createdAt: new Date(),
        points: 0,
    },
];
