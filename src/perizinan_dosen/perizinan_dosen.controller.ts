import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe, UseGuards, Logger } from '@nestjs/common';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { ApiTags, ApiQuery } from '@nestjs/swagger';
import { PerizinanDosen } from './perizinan_dosen.entity';
import { CreatePerizinanDosenDto } from './dto/create_perizinan_dosen.dto';
import { GetPerizinanDosenFilterDto } from './dto/get-tasks-filter.dto';
import { PerizinanDosenService } from './perizinan_dosen.service';

@ApiTags('perizinan_dosen')
@Controller('perizinan_dosen')
export class PerizinanDosenController {
  private logger = new Logger('TasksController');

  constructor(
    private perizinanDosenService: PerizinanDosenService
  ) {}

  @Get()
  @ApiQuery({ name: 'limit' })
  @ApiQuery({ name: 'page'})
  getPerizinanDosen(
    @Query(ValidationPipe) filterDto: GetPerizinanDosenFilterDto,
  ): Promise<PerizinanDosen[]> {
    return this.perizinanDosenService.getPerizinanDosen(filterDto);
  }

  @Post()
  createPerizinanDosenDto(
    @Body() createPerizinanDosenDto: CreatePerizinanDosenDto,
  ): Promise<PerizinanDosen> {
    return this.perizinanDosenService.createPerizinanDosen(createPerizinanDosenDto);
  }
}
