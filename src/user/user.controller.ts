import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('all')
    async getAllUsers() {
        return this.userService.getAllUsers();
    }

    @Get(':email')
    async getUser(@Param('email') email: string) {
        const user = await this.userService.getUser(email);
        if (!user) {
            throw new NotFoundException(`User with email ${email} not found`);
        }
        return user;
    }

    @Post('')
    async addUser(@Body('email') email: string) {
        return this.userService.addUser(email);
    }


}
