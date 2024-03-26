import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { TaskController } from './task.controller';

@Module({
    imports: [DatabaseModule],
    exports: [TaskService],
    providers: [TaskService],
    controllers: [TaskController],
})
export class TaskModule {}
