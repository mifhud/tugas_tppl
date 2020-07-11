import { EntityRepository, Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { Logger, InternalServerErrorException } from '@nestjs/common';
import { PerizinanDosen } from './perizinan_dosen.entity';

@EntityRepository(PerizinanDosen)
export class TaskRepository extends Repository<PerizinanDosen> {
  private logger = new Logger('TaskRepository');
}
