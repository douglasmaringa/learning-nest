import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body('username') username: string, @Body('password') password: string): Promise<any> {
    return await this.userService.createUser(username, password);
  }

  @Post('login')
  async login(@Body('username') username: string, @Body('password') password: string): Promise<any> {
    const user = await this.userService.loginUser(username, password);
    if (user) {
      delete user.password;
      return { message: 'Login successful',user: user};
    } else {
      return { message: 'Invalid username or password' };
    }
  }
}
