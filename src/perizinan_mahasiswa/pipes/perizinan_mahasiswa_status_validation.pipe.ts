import { PipeTransform, BadRequestException } from '@nestjs/common';
import { PerizinanMahasiswaStatus } from '../perizinan_mahasiswa.enum';
import { UpdatePerizinanMahasiswaStatusDto } from '../dto/update_perizinan_mahasiswa_status.dto';

export class PerizinanMahasiswaStatusValidationPipe implements PipeTransform {

  readonly allowedStatuses = [
    PerizinanMahasiswaStatus.APPROVE,
    PerizinanMahasiswaStatus.REJECT,
  ];

  transform(value: UpdatePerizinanMahasiswaStatusDto) {
    if (!this.isStatusValid(value.status)) {
      throw new BadRequestException(`"${value.status}" is an invalid status`);
    }
    
    return value;
  }

  private isStatusValid(status: any) {
    const idx = this.allowedStatuses.indexOf(status);
    return idx !== -1;
  }
}
