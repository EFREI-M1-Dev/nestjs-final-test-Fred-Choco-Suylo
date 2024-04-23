import {
    BadRequestException,
    Body,
    Controller,
    Get,
    NotFoundException,
    Param,
    Post,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { Task, User } from '@prisma/client';

@Controller()
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Get('all')
    async getAllTasks() {
        return this.taskService.getAllTasks();
    }

    @Get(':name')
    async getTaskByName(@Param('name') name: Task['name']) {
        const task = await this.taskService.getTaskByName(name);
        if (!task) {
            throw new NotFoundException(`Task with name ${name} not found`);
        }
        return task;
    }

    @Get('user/:userId')
    async getUserTasks(@Param('userId') userId: string) {
        if(parseInt(userId) < 0 || isNaN(parseInt(userId))) {
            throw new BadRequestException(`User id ${userId} is not valid`);
        }
        return this.taskService.getUserTasks(parseInt(userId));
    }

    @Post('')
    async addTask(
        @Body('name') name: string,
        @Body('userId') userId: string,
        @Body('priority') priority: string,
    ) {

        if (!name || !userId || !priority) {
            throw new BadRequestException('Missing required fields');
        }

        if (isNaN(parseInt(userId, 10)) || isNaN(parseInt(priority, 10))) {
            throw new BadRequestException('Invalid userId or priority');
        }

        if (parseInt(priority, 10) < 0) {
            throw new BadRequestException('Priority must be a positive number');
        }
      
        return this.taskService.addTask(name, parseInt(userId, 10), parseInt(priority, 10));
    }
}
