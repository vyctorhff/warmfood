import { User } from "../../domain/user.domain.ts";

export interface UserRepositoy {
    findByEmail: () => User;
}

export interface UserRepository {
    findByEmail(email: string): Promise<User>;
}