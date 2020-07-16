import { IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePerizinanDosenDto {
  @ApiProperty({
    type: Number,
    required: true,
  })
  @IsNotEmpty()
  id_karyawan: number;

  @ApiProperty({
    type: Number,
    required: true,
  })
  @IsNotEmpty()
  disetujui: number;

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
  id_jadwal_perkuliahan: number;

  @ApiProperty({
    type: String,
    required: false,
  })
  @IsOptional()
  keterangan: string;
}
