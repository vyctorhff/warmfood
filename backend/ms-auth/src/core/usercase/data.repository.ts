import { Account } from "../domain/acount.domain.ts";
import { User } from "../domain/user.domain.ts";

export interface UserRepositoy {
    findByEmail: () => User;
}

export interface AccountRepositoy {
    finByLoginAndPass: (login: string, pass: string) => Account;
}