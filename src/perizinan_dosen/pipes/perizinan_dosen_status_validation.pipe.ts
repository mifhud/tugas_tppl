import { PipeTransform, BadRequestException } from '@nestjs/common';
import { PerizinanDosenStatus } from '../perizinan_dosen.enum';
import { UpdatePerizinanDosenStatusDto } from '../dto/update_perizinan_dosen_status.dto';

export class PerizinanDosenStatusValidationPipe implements PipeTransform {

  readonly allowedStatuses = [
    PerizinanDosenStatus.APPROVE,
    PerizinanDosenStatus.REJECT,
  ];

  transform(value: UpdatePerizinanDosenStatusDto) {
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
