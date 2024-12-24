import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';


@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true })
    username: string;

    @Column({ type: 'string' })
    role: string//'admin' | 'user';

    @Column()
    password: string;

    @CreateDateColumn()
    createdAt: Date;

    @Column({ type: 'int', default: 0 })
    points: number; // 直接儲存數字總點數
}
