import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('login')
export class AppController {
  @Get()
  @UseGuards(AuthGuard('local'))
  getHello(@Request() req): string {
    return `Welcome 👋 ${req.body.username}`;
  }
}
