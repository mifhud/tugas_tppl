import { IsOptional, IsIn, IsNotEmpty } from 'class-validator';

export class GetPerizinanDosenByIdDto {
  @IsNotEmpty()
  id: number;
}
