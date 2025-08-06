import { Account } from "../domain/acount.domain.ts";
import { LoginResponse } from "../domain/login.domain.ts";

export interface EncryptUser {
    encrypt(account: Account): Promise<LoginResponse>;
}