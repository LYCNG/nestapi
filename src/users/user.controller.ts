import { Controller, Post, Body, Get, Param, Inject } from '@nestjs/common';
import { IUsersService } from './type';


@Controller('users')
export class UserController {
    constructor(
        @Inject('UsersServiceMain') private readonly userService: IUsersService) { }

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

    @Get('user')
    getUser() {
        return [{ id: '123', username: '123' }]
    }
}
