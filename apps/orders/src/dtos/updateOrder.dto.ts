import { ApiProperty } from '@nestjs/swagger';

export class UpdateOrderDto {
  @ApiProperty({
    type: String,
    required: false,
  })
  name: string;

  @ApiProperty({
    type: String,
    required: false,
  })
  phoneNumber: string;
}
