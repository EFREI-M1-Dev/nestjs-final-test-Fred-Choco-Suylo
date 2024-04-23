import { Injectable } from '@nestjs/common';
import { PrismaService } from '../infrastructure/database/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) {
    }

    async addUser(email: User['email']): Promise<void> {
        await this.prisma.user.create({
            data: {
                email: email,
            },
        });
        return;
    }

    async getUser(email: User['email']): Promise<User> {
        return await this.prisma.user.findUnique({
            where: {
                email: email,
            },
        });
    }

    async resetData(): Promise<void> {
        await this.prisma.user.deleteMany();
        return;
    }

    // TODO : A DELETE A LA FIN DU PROJECT, C'EST JUSTE POUR LE DEV
    async getAllUsers(): Promise<User[]> {
        const users = await this.prisma.user.findMany();
        return users;
    }
}
