import { User } from "src/entities/user.entity";

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
