import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @ApiProperty({ type: String })
  @MaxLength(300)
  name: string;

  @IsEmail()
  @ApiProperty({ type: String })
  @MaxLength(300)
  email: string;

  @IsNotEmpty()
  @ApiProperty({ type: String })
  @MinLength(8)
  @MaxLength(300)
  password: string;
}
