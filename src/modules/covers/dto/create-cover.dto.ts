import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsNumber,
} from 'class-validator';

export class CreateCoverDto {
  @IsDateString()
  @ApiProperty({ type: Date })
  registerDate: Date;

  @IsNotEmpty()
  @ApiProperty({ type: String })
  historicalNumber: string;

  @IsNumber()
  @ApiProperty({ type: Number })
  totalAmount: number;

  @IsInt()
  @ApiProperty({ type: Number })
  iteration: number;

  @IsBoolean()
  @ApiProperty({ type: Boolean })
  invoiced: boolean;
}
