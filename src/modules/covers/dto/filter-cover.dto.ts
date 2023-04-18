import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsOptional } from 'class-validator';

export class FilterCoverDto {
  @IsOptional()
  @IsDateString()
  @ApiProperty({ type: Date })
  registerDateLte: Date;

  @IsOptional()
  @IsDateString()
  @ApiProperty({ type: Date })
  registerDateGte: Date;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ type: Number })
  totalAmount: number;

  @IsOptional()
  @IsBoolean()
  @ApiProperty({ type: Boolean })
  invoiced: boolean;
}
