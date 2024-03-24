import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { DatabaseModule } from 'src/infrastructure/database/database.module';

@Module({
  imports: [DatabaseModule],
  exports: [TaskService],
  providers: [TaskService],
})
export class TaskModule {}
