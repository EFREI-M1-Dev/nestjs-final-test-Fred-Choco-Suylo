import {
    BadRequestException,
    Body, ConflictException,
    Controller,
    Get,
    NotFoundException,
    Param,
    Post
} from "@nestjs/common";
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

    @Post()
    async addUser(@Body('email') email: string) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            throw new BadRequestException(`Email ${email} is not valid`);
        }
        if (await this.userService.getUser(email)) {
            throw new ConflictException(
                `User with email ${email} already exists`,
            );
        }
        return this.userService.addUser(email);
    }
}
