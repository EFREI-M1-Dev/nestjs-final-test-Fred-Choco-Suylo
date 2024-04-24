import { Injectable } from '@nestjs/common';
import { PrismaService } from '../infrastructure/database/prisma.service';
import { Task, User } from '@prisma/client';

@Injectable()
export class TaskService {
    constructor(private readonly prisma: PrismaService) {}

    async addTask(
        name: Task['name'],
        userId: User['id'],
        priority: Task['priority'],
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

    async getTaskByName(name: Task['name']): Promise<Task> {
        return this.prisma.task.findFirst({
            where: {
                name: name,
            },
        });
    }

    async getUserTasks(userId: User['id']): Promise<Task[]> {
        return this.prisma.task.findMany({
            where: {
                userId: userId,
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
