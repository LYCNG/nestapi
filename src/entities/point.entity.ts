import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Point {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    point: number;

    @ManyToOne(() => User, (user) => user.points, { onDelete: 'CASCADE' })
    user: User;
}
