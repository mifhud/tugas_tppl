import { IsOptional, IsIn, IsNotEmpty } from 'class-validator';

export class GetRuangFilterDto {
  @IsNotEmpty()
  page: number;

  @IsNotEmpty()
  limit: number;
}
