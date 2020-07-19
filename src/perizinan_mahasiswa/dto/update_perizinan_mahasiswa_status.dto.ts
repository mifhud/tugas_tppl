import { IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePerizinanMahasiswaStatusDto {
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
