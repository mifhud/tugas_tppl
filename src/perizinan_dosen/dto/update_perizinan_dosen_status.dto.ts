import { IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PerizinanDosenStatus } from '../perizinan_dosen.enum';

export class UpdatePerizinanDosenStatusDto {
  @ApiProperty({
    type: Number,
    required: true,
  })
  @IsNotEmpty()
  status: number;

  @ApiProperty({
    type: Number,
    required: true,
  })
  @IsNotEmpty()
  update_status_by: number;
}
