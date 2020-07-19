import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { PerizinanDosenModule } from './perizinan_dosen/perizinan_dosen.module';
import { PerizinanMahasiswaModule } from './perizinan_mahasiswa/perizinan_mahasiswa.module';
import { RekapitulasiModule } from './rekapitulasi/rekapitulasi.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    PerizinanDosenModule,
    PerizinanMahasiswaModule,
    RekapitulasiModule
  ],
})
export class AppModule {}
