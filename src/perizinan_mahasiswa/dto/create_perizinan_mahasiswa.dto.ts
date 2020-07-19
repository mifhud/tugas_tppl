import { IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePerizinanMahasiswaDto {
  @ApiProperty({
    type: Number,
    required: true,
  })
  @IsNotEmpty()
  id_mahasiswa: number;

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
