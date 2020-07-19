import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe, UseGuards, Logger } from '@nestjs/common';
import { ApiTags, ApiQuery } from '@nestjs/swagger';
import { PerizinanMahasiswaService } from './perizinan_mahasiswa.service';
import { GetPerizinanMahasiswaFilterDto } from './dto/get_perizinan_mahasiswa_filter.dto';
import { PerizinanMahasiswa } from './perizinan_mahasiswa.entity';
import { CreatePerizinanMahasiswaDto } from './dto/create_perizinan_mahasiswa.dto';
import { PerizinanMahasiswaStatusValidationPipe } from './pipes/perizinan_mahasiswa_status_validation.pipe';
import { UpdatePerizinanMahasiswaStatusDto } from './dto/update_perizinan_mahasiswa_status.dto';

@ApiTags('perizinan_mahasiswa')
@Controller('perizinan_mahasiswa')
export class PerizinanMahasiswaController {

  constructor(
    private perizinanMahasiswaService: PerizinanMahasiswaService
  ) {}

  @Get()
  @ApiQuery({ name: 'limit' })
  @ApiQuery({ name: 'page'})
  getPerizinanMahasiswa(
    @Query() filterDto: GetPerizinanMahasiswaFilterDto,
  ): Promise<PerizinanMahasiswa[]> {
    return this.perizinanMahasiswaService.getPerizinanMahasiswa(filterDto);
  }

  @Get(':id')
  getPerizinanMahasiswaById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<PerizinanMahasiswa> {
    return this.perizinanMahasiswaService.getPerizinanMahasiswaById(id);
  }

  @Post()
  createPerizinanMahasiswaDto(
    @Body() createPerizinanMahasiswaDto: CreatePerizinanMahasiswaDto,
  ): Promise<PerizinanMahasiswa> {
    return this.perizinanMahasiswaService.createPerizinanMahasiswa(createPerizinanMahasiswaDto);
  }

    @Patch(':id/status')
    updatePerizinanMahasiswaStatus(
        @Param('id', ParseIntPipe) id: number,
        @Body(PerizinanMahasiswaStatusValidationPipe) updatePerizinanMahasiswaStatusDto: UpdatePerizinanMahasiswaStatusDto,
    ): Promise<PerizinanMahasiswa> {
        return this.perizinanMahasiswaService.updatePerizinanMahasiswaStatus(id, updatePerizinanMahasiswaStatusDto);
    }

    @Delete(':id')
    deletePerizinanMahasiswaById(
      @Param('id', ParseIntPipe) id: number,
    ): Promise<void> {
      return this.perizinanMahasiswaService.deletePerizinanMahasiswaById(id);
    }
}
