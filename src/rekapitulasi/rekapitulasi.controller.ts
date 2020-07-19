import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe, UseGuards, Logger } from '@nestjs/common';
import { ApiTags, ApiQuery } from '@nestjs/swagger';
import { RekapitulasiService } from './rekapitulasi.service';

@ApiTags('rekapitulasi')
@Controller('rekapitulasi')
export class RekapitulasiController {

  constructor(
    private rekapitulasiService: RekapitulasiService
  ) {}

//   @Get()
//   @ApiQuery({ name: 'limit' })
//   @ApiQuery({ name: 'page'})
//   getPerizinanMahasiswa(
//     @Query() filterDto: GetPerizinanMahasiswaFilterDto,
//   ): Promise<PerizinanMahasiswa[]> {
//     return this.perizinanMahasiswaService.getPerizinanMahasiswa(filterDto);
//   }

  @Get('mahasiswa/:id')
  getRekapitulasiByIdMahasiswa(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<any> {
    return this.rekapitulasiService.getRekapitulasiByIdMahasiswa(id);
  }

  @Get('dosen/:id')
  getRekapitulasiByIdDosen(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<any> {
    return this.rekapitulasiService.getRekapitulasiByIdDosen(id);
  }
}
