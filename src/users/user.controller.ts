import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';


@Controller('users')
export class UserController {
    constructor(private readonly userService: UsersService) { }

    @Post()
    createUser(@Body() body: { username: string; role: 'admin' | 'user'; password: string }) {
        return this.userService.createUser(body.username, body.role, body.password);
    }

    @Post(':id/points')
    addPoint(@Param('id') userId: string, @Body() body: { points: number }) {
        return this.userService.addPoint(userId, body.points);
    }

    @Get(':id')
    getUserWithPoints(@Param('id') userId: string) {
        return this.userService.getUserWithPoints(userId);
    }
}
