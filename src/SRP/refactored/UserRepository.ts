import { User } from './User';

export class UserRepository {
  private users: User[] = [];

  save(user: User): void {
    this.users.push(user);
    console.log(`[DB] Збережено: ${user.name}`);
  }

  getAll(): User[] {
    return this.users;
  }
}
