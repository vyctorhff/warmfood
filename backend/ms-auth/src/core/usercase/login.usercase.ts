import { LoginRequest, LoginResponse } from "../domain/login.domain.ts";
import { AccountRepositoy } from "./data.repository.ts";
import { Logger } from "./logger.ts";
import { EncryptUser } from "./user.security.ts";

export class LoginUserCase {

    constructor(
        private accountRepositoy: AccountRepositoy,
        private encryptUser: EncryptUser,
        private log: Logger
    ) {}

    async login(loginRequest: LoginRequest): Promise<LoginResponse> {
        this.log.info('Validating user');

        const { login, pass } = loginRequest;
        if (!login || !pass) {
            throw new Error('Login or pass invalid');
        }

        this.log.info('Creating user security');

        const account = this.accountRepositoy.finByLoginAndPass(login, pass);
        if (!account) {
            throw new Error('Account not found');
        }

        return await this.encryptUser.encrypt(account);
    }
}