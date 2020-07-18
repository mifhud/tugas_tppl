import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe, UseGuards, Logger } from '@nestjs/common';
import { ApiTags, ApiQuery } from '@nestjs/swagger';
import { PerizinanDosen } from './perizinan_dosen.entity';
import { CreatePerizinanDosenDto } from './dto/create_perizinan_dosen.dto';
import { GetPerizinanDosenFilterDto } from './dto/get_perizinan_dosen_filter.dto';
import { PerizinanDosenService } from './perizinan_dosen.service';
import { PerizinanDosenStatusValidationPipe } from './pipes/perizinan_dosen_status_validation.pipe';
import { PerizinanDosenStatus } from './perizinan_dosen.enum';
import { UpdatePerizinanDosenStatusDto } from './dto/update_perizinan_dosen_status.dto';

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
    @Query() filterDto: GetPerizinanDosenFilterDto,
  ): Promise<PerizinanDosen[]> {
    return this.perizinanDosenService.getPerizinanDosen(filterDto);
  }

  @Get(':id')
  getPerizinanDosenById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<PerizinanDosen> {
    return this.perizinanDosenService.getPerizinanDosenById(id);
  }

  @Post()
  createPerizinanDosenDto(
    @Body() createPerizinanDosenDto: CreatePerizinanDosenDto,
  ): Promise<PerizinanDosen> {
    return this.perizinanDosenService.createPerizinanDosen(createPerizinanDosenDto);
  }

  @Patch(':id/status')
  updatePerizinanDosenStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body(PerizinanDosenStatusValidationPipe) updatePerizinanDosenStatusDto: UpdatePerizinanDosenStatusDto,
  ): Promise<PerizinanDosen> {
    return this.perizinanDosenService.updatePerizinanDosenStatus(id, updatePerizinanDosenStatusDto);
  }

  @Delete(':id')
  deletePerizinanDosenById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<void> {
    return this.perizinanDosenService.deletePerizinanDosenById(id);
  }
}
