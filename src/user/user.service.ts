import { Injectable, NotImplementedException } from '@nestjs/common';
import { PrismaService } from 'src/infrastructure/database/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) {}

    async addUser(email: string): Promise<void> {
        await this.prisma.user.create({
            data: {
                email: email,
            },
        });

        return;
    }

    async getUser(email: string): Promise<User> {
        const user = await this.prisma.user.findUnique({
            where: {
                email: email,
            },
        });
        return user;
    }

    async resetData(): Promise<void> {
        throw new NotImplementedException();
    }

    // TODO : A DELETE A LA FIN DU PROJECT, C'EST JUSTE POUR LE DEV
    async getAllUsers(): Promise<User[]> {
        const users = await this.prisma.user.findMany();
        return users;
    }
}
