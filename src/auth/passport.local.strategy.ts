import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UserService } from 'src/users/user.service';
@Injectable()
export class PassportLocalStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super();
  }

  validate(username: string, password: string): User {
    const user = this.userService.getUserByName(username);
    if (user === undefined)
      throw new UnauthorizedException(
        'Kun Hai re thu ?? Eu kikan Aave thu, maye 😡 !!!',
      );

    if (user.password === password) return user;
  }
}
