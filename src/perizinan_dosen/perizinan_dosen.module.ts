import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PerizinanDosen } from './perizinan_dosen.entity';
import { PerizinanDosenController } from './perizinan_dosen.controller';
import { PerizinanDosenService } from './perizinan_dosen.service';
import { PerizinanDosenRepository } from './perizinan_dosen.repository';
import { KaryawanRepository, } from 'src/karyawan/karyawan.repository';
import { JabatanKaryawanRepository } from 'src/jabatan_karyawan/jabatan_karyawan.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([PerizinanDosenRepository, KaryawanRepository,
      JabatanKaryawanRepository]),
  ],
  controllers: [PerizinanDosenController],
  providers: [PerizinanDosenService],
})
export class PerizinanDosenModule {}
