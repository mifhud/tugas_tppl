import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RekapitulasiController } from './rekapitulasi.controller';
import { RekapitulasiService } from './rekapitulasi.service';
import { TahunAkademikRepository } from 'src/tahun_akademik/tahun_akademik.repository';
import { MahasiswaRepository } from 'src/mahasiswa/mahasiswa.repository';
import { PerizinanMahasiswaRepository } from 'src/perizinan_mahasiswa/perizinan_mahasiswa.repository';
import { PerizinanDosenRepository } from 'src/perizinan_dosen/perizinan_dosen.repository';
import { KaryawanRepository } from 'src/karyawan/karyawan.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([TahunAkademikRepository, MahasiswaRepository,
      PerizinanMahasiswaRepository, PerizinanDosenRepository, KaryawanRepository]),
  ],
  controllers: [RekapitulasiController],
  providers: [RekapitulasiService],
})
export class RekapitulasiModule {}
