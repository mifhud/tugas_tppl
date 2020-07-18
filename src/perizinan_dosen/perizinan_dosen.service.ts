import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PerizinanDosenRepository } from './perizinan_dosen.repository';
import { GetPerizinanDosenFilterDto } from './dto/get_perizinan_dosen_filter.dto';
import { PerizinanDosen } from './perizinan_dosen.entity';
import { CreatePerizinanDosenDto } from './dto/create_perizinan_dosen.dto';
import { PerizinanDosenStatus } from './perizinan_dosen.enum';
import { UpdatePerizinanDosenStatusDto } from './dto/update_perizinan_dosen_status.dto';
import { KaryawanRepository } from 'src/karyawan/karyawan.repository';
import { JabatanKaryawanRepository } from 'src/jabatan_karyawan/jabatan_karyawan.repository';
import { Karyawan } from 'src/karyawan/karyawan.entity';
import { JabatanKaryawan } from 'src/jabatan_karyawan/jabatan_karyawan.entity';

@Injectable()
export class PerizinanDosenService {
  constructor(
    @InjectRepository(PerizinanDosenRepository)
    private perizinanDosenRepository: PerizinanDosenRepository,
    @InjectRepository(KaryawanRepository)
    private karyawanRepository: KaryawanRepository,
    @InjectRepository(JabatanKaryawanRepository)
    private jabatanKaryawanRepository: JabatanKaryawanRepository,
  ) {}

  async getPerizinanDosen(
    filterDto: GetPerizinanDosenFilterDto,
  ): Promise<PerizinanDosen[]> {
    return this.perizinanDosenRepository.getPerizinanDosen(filterDto);
  }

  async getPerizinanDosenById(
    id: number
  ): Promise<PerizinanDosen> {
    return this.perizinanDosenRepository.getPerizinanDosenById(id);
  }

  async createPerizinanDosen(
    createPerizinanDto: CreatePerizinanDosenDto,
  ): Promise<PerizinanDosen> {
    const karyawan: Karyawan = await this.karyawanRepository.findOne(createPerizinanDto.id_karyawan);
    
    if(!karyawan) {
      throw new NotFoundException(`Karyawan with ID "${createPerizinanDto.id_karyawan}" not found`);      
    }

    return this.perizinanDosenRepository.createPerizinanDosen(createPerizinanDto);
  }

  async updatePerizinanDosenStatus(
    id: number,
    updatePerizinanDosenStatusDto: UpdatePerizinanDosenStatusDto,
  ): Promise<PerizinanDosen> {
    const updateStatusBy: Karyawan = await this.karyawanRepository.findOne(updatePerizinanDosenStatusDto.update_status_by);
    
    if(!updateStatusBy) {
      throw new NotFoundException(`Update status by with ID "${id}" not found`);      
    }

    const jabatanForupdateStatusBy: JabatanKaryawan = await this.jabatanKaryawanRepository.findOne({ id_karyawan: updateStatusBy });

    if(!jabatanForupdateStatusBy) {
      throw new NotFoundException(`Jabatan karyawan with user "${updateStatusBy.id}" not found`);      
    }

    if(jabatanForupdateStatusBy.id_jabatan.kode !== '1') {
      throw new NotFoundException(`User "${updateStatusBy.id}" has not acess for update status`);
    }

    const perizinanDosen = await this.getPerizinanDosenById(id);
    perizinanDosen.status = updatePerizinanDosenStatusDto.status;
    perizinanDosen.update_status_by = updatePerizinanDosenStatusDto.status;
    await perizinanDosen.save();
    return perizinanDosen;
  }

  async deletePerizinanDosenById(
    id: number,
  ): Promise<void> {
    const result = await this.perizinanDosenRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Perizinan dosen with ID "${id}" not found`);
    }
  }
}
