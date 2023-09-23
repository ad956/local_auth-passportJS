import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  public users: User[] = [
    {
      username: 'ad956',
      password: '1234',
    },
    {
      username: 'ad902',
      password: '1245',
    },
  ];

  getUserByName(userName: string): User {
    return this.users.find((user: User) => user.username === userName);
  }
}
