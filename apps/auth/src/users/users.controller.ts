import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { CreateUserRequest } from './dto/create-user.request';
import { UsersService } from './users.service';

@Controller('auth/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'created successfully',
  })
  @ApiResponse({ status: 422, description: 'Unprocessable Entity' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  async createUser(@Body() request: CreateUserRequest) {
    return this.usersService.createUser(request);
  }
}
