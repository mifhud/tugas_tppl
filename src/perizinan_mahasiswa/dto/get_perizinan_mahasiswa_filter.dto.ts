import { IsOptional, IsIn, IsNotEmpty } from 'class-validator';

export class GetPerizinanMahasiswaFilterDto {
  @IsNotEmpty()
  page: number;

  @IsNotEmpty()
  limit: number;
}
