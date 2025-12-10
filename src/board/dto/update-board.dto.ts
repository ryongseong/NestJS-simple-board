import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UpdateBoardDto {
  @IsNotEmpty()
  @ApiProperty({
    description: '내용',
    example: 'Updated content here',
    required: true,
  })
  contents?: string;
}
