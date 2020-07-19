import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PerizinanMahasiswaRepository } from './perizinan_mahasiswa.repository';
import { GetPerizinanMahasiswaFilterDto } from './dto/get_perizinan_mahasiswa_filter.dto';
import { PerizinanMahasiswa } from './perizinan_mahasiswa.entity';
import { CreatePerizinanMahasiswaDto } from './dto/create_perizinan_mahasiswa.dto';
import { Mahasiswa } from 'src/mahasiswa/mahasiswa.entity';
import { MahasiswaRepository } from 'src/mahasiswa/mahasiswa.repository';
import { UpdatePerizinanMahasiswaStatusDto } from './dto/update_perizinan_mahasiswa_status.dto';
import { KaryawanRepository } from 'src/karyawan/karyawan.repository';
import { Karyawan } from 'src/karyawan/karyawan.entity';

@Injectable()
export class PerizinanMahasiswaService {
  constructor(
    @InjectRepository(MahasiswaRepository)
    private mahasiswaRepository: MahasiswaRepository,
    @InjectRepository(KaryawanRepository)
    private karyawanRepository: KaryawanRepository,
    @InjectRepository(PerizinanMahasiswaRepository)
    private perizinanMahasiswaRepository: PerizinanMahasiswaRepository,
  ) {}

  async getPerizinanMahasiswa(
    filterDto: GetPerizinanMahasiswaFilterDto,
  ): Promise<PerizinanMahasiswa[]> {
    const perizinanMahasiswa: PerizinanMahasiswa[] = await this.perizinanMahasiswaRepository.find({ skip: filterDto.page, take: filterDto.limit });

    return perizinanMahasiswa;
  }

  async getPerizinanMahasiswaById(
    id: number
  ): Promise<PerizinanMahasiswa> {
    const perizinanMahasiswa: PerizinanMahasiswa = await this.perizinanMahasiswaRepository.findOne(id);
    
    if(!perizinanMahasiswa) {
      throw new NotFoundException(`Perizinan mahasiswa with ID "${id}" not found`);
    }

    return perizinanMahasiswa;
  }

  async createPerizinanMahasiswa(
    createPerizinanDto: CreatePerizinanMahasiswaDto,
  ): Promise<PerizinanMahasiswa> {
    const mahasiswa: Mahasiswa = await this.mahasiswaRepository.findOne(createPerizinanDto.id_mahasiswa);
    
    if(!mahasiswa) {
      throw new NotFoundException(`Mahasiswa with ID "${createPerizinanDto.id_mahasiswa}" not found`);      
    }

    return this.perizinanMahasiswaRepository.createPerizinanMahasiswa(createPerizinanDto);
  }

  async updatePerizinanMahasiswaStatus(
    id: number,
    updatePerizinanMahasiswaStatusDto: UpdatePerizinanMahasiswaStatusDto,
  ): Promise<PerizinanMahasiswa> {
    const updateStatusBy: Karyawan = await this.karyawanRepository.findOne(updatePerizinanMahasiswaStatusDto.update_status_by);
    
    if(!updateStatusBy) {
      throw new NotFoundException(`Update status by with ID "${id}" not found`);      
    }

    const perizinanMahasiswa = await this.getPerizinanMahasiswaById(id);
    perizinanMahasiswa.status = updatePerizinanMahasiswaStatusDto.status;
    perizinanMahasiswa.update_status_by = updatePerizinanMahasiswaStatusDto.status;
    await perizinanMahasiswa.save();
    return perizinanMahasiswa;
  }

  async deletePerizinanMahasiswaById(
    id: number,
  ): Promise<void> {
    const result = await this.perizinanMahasiswaRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Perizinan mahasiswa with ID "${id}" not found`);
    }
  }  
}
