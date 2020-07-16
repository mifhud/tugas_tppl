import { IsOptional, IsIn, IsNotEmpty } from 'class-validator';

export class GetPerizinanDosenFilterDto {
  @IsNotEmpty()
  page: number;

  @IsNotEmpty()
  limit: number;
}
