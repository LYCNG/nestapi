import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IUsersService } from 'src/users/type';



@Injectable()
export class AuthService {
    constructor(
        @Inject('UsersServiceMain') private usersService: IUsersService,
        private jwtService: JwtService
    ) { }

    /**
     * 
     * @param username 
     * @param password
     * @returns signed in user
     */
    async signIn(username: string, password: string): Promise<{ username: string, role: string, access_token: string }> {
        const user = await this.usersService.findOne(username);
        if (user?.password !== password) {
            throw new UnauthorizedException();
        }
        const payload = { sub: user.id, username: user.username };
        return {
            username: user.username,
            role: user.role,
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}
