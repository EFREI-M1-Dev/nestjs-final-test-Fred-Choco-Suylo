import {
    Body,
    Controller,
    Get,
    NotFoundException,
    Param,
    Post,
} from '@nestjs/common';
import { TaskService } from './task.service';

@Controller()
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Get('all')
    async getAllTasks() {
        return this.taskService.getAllTasks();
    }

    @Get(':name')
    async getTaskByName(@Param('name') name: string) {
        const task = await this.taskService.getTaskByName(name);
        if (!task) {
            throw new NotFoundException(`Task with name ${name} not found`);
        }
        return task;
    }

    @Get('user/:userId')
    async getUserTasks(@Param('userId') userId: string) {
        return this.taskService.getUserTasks(userId);
    }

    @Post('')
    async addTask(
        @Body('task') task: string,
        @Body('userId') userId: number,
        @Body('priority') priority: number,
    ) {
        return this.taskService.addTask(task, userId, priority);
    }
}
