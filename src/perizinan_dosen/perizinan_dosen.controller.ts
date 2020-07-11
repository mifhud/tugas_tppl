import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe, UseGuards, Logger } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('perizinan_dosen')
@Controller('perizinan_dosen')
export class PerizinanDosenController {
  private logger = new Logger('TasksController');

  constructor() {}

  @Get()
  getPermitDosen(
    @Query(ValidationPipe) filterDto: GetTasksFilterDto,
  )/* : Promise<Task[]> */ {
    // this.logger.verbose(`User "${user.username}" retrieving all tasks. Filters: ${JSON.stringify(filterDto)}`);
    // return this.tasksService.getTasks(filterDto, user);
    return "Get permit for dosen";
  }
}
