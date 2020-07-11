import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PerizinanDosen } from './perizinan_dosen.entity';
import { PerizinanDosenController } from './perizinan_dosen.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([PerizinanDosen]),
  ],
  controllers: [PerizinanDosenController],
  providers: [],
})
export class PerizinanDosenModule {}
