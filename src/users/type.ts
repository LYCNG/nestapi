export type User = {
    id: string;
    name: string;
    password: string;
    createdAt: Date;
};

export const Users: User[] = [
    {
        id: '1',
        name: 'john',
        password: 'changeme',
        createdAt: new Date(),
    },
    {
        id: '2',
        name: 'maria',
        password: 'guess',
        createdAt: new Date(),
    },
];
