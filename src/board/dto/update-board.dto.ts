import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, MaxLength, MinLength } from 'class-validator';

export class UpdateBoardDto {
  @MinLength(2)
  @MaxLength(20)
  @IsOptional()
  @ApiProperty({ required: false, minLength: 2, maxLength: 20 })
  name?: string;

  @IsOptional()
  contents?: string;
}
