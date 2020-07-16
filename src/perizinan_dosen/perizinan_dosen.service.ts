import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PerizinanDosenRepository } from './perizinan_dosen.repository';
import { GetPerizinanDosenFilterDto } from './dto/get-tasks-filter.dto';
import { PerizinanDosen } from './perizinan_dosen.entity';
import { CreatePerizinanDosenDto } from './dto/create_perizinan_dosen.dto';

@Injectable()
export class PerizinanDosenService {
  constructor(
    @InjectRepository(PerizinanDosenRepository)
    private perizinanDosenRepository: PerizinanDosenRepository,
  ) {}

  async getPerizinanDosen(
    filterDto: GetPerizinanDosenFilterDto,
  ): Promise<PerizinanDosen[]> {
    return this.perizinanDosenRepository.getPerizinanDosen(filterDto);
  }

  async createPerizinanDosen(
    createPerizinanDto: CreatePerizinanDosenDto,
  ): Promise<PerizinanDosen> {
    return this.perizinanDosenRepository.createPerizinanDosen(createPerizinanDto);
  }
}