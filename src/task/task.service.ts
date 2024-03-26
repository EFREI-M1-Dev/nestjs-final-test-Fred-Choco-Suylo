import { Injectable } from '@nestjs/common';
import { PrismaService } from '../infrastructure/database/prisma.service';
import { Task } from '@prisma/client';

@Injectable()
export class TaskService {
    constructor(private readonly prisma: PrismaService) {}

    async addTask(
        name: string,
        userId: number,
        priority: number,
    ): Promise<void> {
        await this.prisma.task.create({
            data: {
                name: name,
                priority: priority,
                userId: userId,
            },
        });

        return;
    }

    async getTaskByName(name: string): Promise<Task> {
        return this.prisma.task.findFirst({
            where: {
                name: name,
            },
        });
    }

    async getUserTasks(userId: string): Promise<Task[]> {
        return this.prisma.task.findMany({
            where: {
                userId: parseInt(userId),
            },
        });
    }

    async resetData(): Promise<void> {
        await this.prisma.task.deleteMany();
        return;
    }

    async getAllTasks(): Promise<Task[]> {
        return this.prisma.task.findMany();
    }
}
