import { User } from "../../../../core/domain/user.domain.ts";
import { UserRepository } from "../../../../core/usercase/dependencies/data.repository.ts";

export class UserFakeRepository implements UserRepository {

  findByEmail(email: string): Promise<User> {

    if (email.includes('admin')) {
        return Promise.resolve({
          email: 'admin',
          name: 'Admin',
          dateCreated: new Date(),
        });
    }

    return Promise.resolve({
      id: 1231,
      email: 'user1',
      name: 'User name',
      dateCreated: new Date(),
    });
  }
}