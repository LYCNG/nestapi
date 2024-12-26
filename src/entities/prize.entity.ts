import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Prize {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    totalQuantity: number;

    @Column()
    remainingQuantity: number;

    @Column({ default: 0 })
    drawnQuantity: number;

    @Column()
    imageUrl: string;

    @CreateDateColumn()
    createdAt: Date;
}