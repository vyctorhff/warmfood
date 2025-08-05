import { LoginRequest, LoginResposne } from "../domain/login.domain.ts";
import { AccountRepositoy } from "./data.repository.ts";
import { EncryptUser } from "./user.security.ts";

export class LoginUserCase {

    constructor(
        private accountRepositoy: AccountRepositoy,
        private encryptUser: EncryptUser,
    ) {}

    login(loginRequest: LoginRequest): LoginResposne {
        const { login, pass } = loginRequest;
        if (!login || !pass) {
            throw new Error('Login or pass invalid');
        }

        const account = this.accountRepositoy.finByLoginAndPass(login, pass);
        if (!account) {
            throw new Error('Account not found');
        }

        return this.encryptUser.encrypt(account);
    }
}