import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsPhoneNumber,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateOrderDto {
  @ApiProperty({
    type: String,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    type: Number,
    required: true,
  })
  @IsPositive()
  @IsNotEmpty()
  price: number;

  @ApiProperty({
    type: String,
    required: false,
  })
  @IsPhoneNumber('IR')
  phoneNumber: string;
}
