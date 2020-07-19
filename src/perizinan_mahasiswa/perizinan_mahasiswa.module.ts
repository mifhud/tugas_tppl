import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PerizinanMahasiswaRepository } from './perizinan_mahasiswa.repository';
import { PerizinanMahasiswaController } from './perizinan_mahasiswa.controller';
import { PerizinanMahasiswaService } from './perizinan_mahasiswa.service';
import { MahasiswaRepository } from 'src/mahasiswa/mahasiswa.repository';
import { KaryawanRepository } from 'src/karyawan/karyawan.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([PerizinanMahasiswaRepository, MahasiswaRepository,
    KaryawanRepository]),
  ],
  controllers: [PerizinanMahasiswaController],
  providers: [PerizinanMahasiswaService],
})
export class PerizinanMahasiswaModule {}
