import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mahasiswa } from 'src/mahasiswa/mahasiswa.entity';
import { MahasiswaRepository } from 'src/mahasiswa/mahasiswa.repository';
import { KaryawanRepository } from 'src/karyawan/karyawan.repository';
import { Karyawan } from 'src/karyawan/karyawan.entity';
import { TahunAkademik } from 'src/tahun_akademik/tahun_akademik.entity';
import { TahunAkademikRepository } from 'src/tahun_akademik/tahun_akademik.repository';
import { PerizinanMahasiswaRepository } from 'src/perizinan_mahasiswa/perizinan_mahasiswa.repository';

@Injectable()
export class RekapitulasiService {
  constructor(
    @InjectRepository(MahasiswaRepository)
    private mahasiswaRepository: MahasiswaRepository,
    @InjectRepository(TahunAkademikRepository)
    private tahunAkademikRepository: TahunAkademikRepository,
    @InjectRepository(PerizinanMahasiswaRepository)
    private perizinanMahasiswaRepository: PerizinanMahasiswaRepository,
    // @InjectRepository(KaryawanRepository)
    // private karyawanRepository: KaryawanRepository,
  ) {}

//   async getPerizinanMahasiswa(
//     filterDto: GetPerizinanMahasiswaFilterDto,
//   ): Promise<PerizinanMahasiswa[]> {
//     const perizinanMahasiswa: PerizinanMahasiswa[] = await this.perizinanMahasiswaRepository.find({ skip: filterDto.page, take: filterDto.limit });

//     return perizinanMahasiswa;
//   }

    async getRekapitulasiByIdMahasiswa(
        id: number
    ): Promise<any> {
        let rekapitulasi: any[] = [];

        const mahasiswa: Mahasiswa = await this.mahasiswaRepository.findOne(id);
        
        if(!mahasiswa) {
            throw new NotFoundException(`Mahasiswa with ID "${id}" not found`);
        }
        
        const tahunAkademik: TahunAkademik[] = await this.tahunAkademikRepository.find();        

        // console.log({
        //     message: "tahunAkademik",
        //     tahunAkademik: tahunAkademik
        // })

        for (let iTahunAkademik = 0; iTahunAkademik < tahunAkademik.length; iTahunAkademik++) {
            const elTahunAkademik = tahunAkademik[iTahunAkademik];
            const dataRekap = {};
            dataRekap['tahun_akademik'] = elTahunAkademik;
            const perizinanMahasiswa = await this.perizinanMahasiswaRepository.getPerizinanMahasiswaByIdAndIdTahunAkademik(id, elTahunAkademik.id);
            dataRekap['perizinan_mahasiswa'] = perizinanMahasiswa;
            rekapitulasi.push(dataRekap);
        }

        return rekapitulasi;
    }
}
