import { Injectable } from '@nestjs/common';

import { DataSource, Repository, Table } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Point } from 'src/entities/point.entity';
import { User } from 'src/entities/user.entity';
import { IUsersService, Users } from './type';



@Injectable()
export class UsersService implements IUsersService {
    private readonly users = Users;

    constructor(
        //InjectRepository: 注入TypeORM Repository 的裝飾器
        @InjectRepository(User) private readonly userRepository: Repository<User>,
        @InjectRepository(Point) private readonly pointRepository: Repository<Point>,
        private dataSource: DataSource
    ) { };


    async checkAndCreateTable() {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        const hasTable = await queryRunner.hasTable('users'); // 檢查資料表是否存在
        const metadata = this.dataSource.getMetadata(User);
        if (!hasTable) {
            await queryRunner.createTable(Table.create(metadata, this.dataSource.driver)); // 建立資料表
            console.log('User table created!');
        } else {
            console.log('User table already exists!');
        }
    }


    async findOne(username: string): Promise<User | undefined> {
        return this.userRepository.findOne({ where: { username } }); // 使用 TypeORM 查找使用者
    }
    async findOneTest(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username); // 搜尋假資料
    }

    async createUser(username: string, role: 'admin' | 'user', password: string): Promise<User> {
        const user = this.userRepository.create({ username, role, password });
        return this.userRepository.save(user);
    }

    async addPoint(userId: string, points: number): Promise<User> {
        const user = await this.userRepository.findOne({ where: { id: userId } });
        if (!user) throw new Error('User not found');
        user.points += points; // 增加點數
        return this.userRepository.save(user);
    }

    async getUserWithPoints(userId: string): Promise<User> {
        return this.userRepository.findOne({
            where: { id: userId },
            relations: ['points'],
        });
    }
}


