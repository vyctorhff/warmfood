import { Account } from "../domain/acount.domain.ts";
import { LoginResposne } from "../domain/login.domain.ts";

export interface EncryptUser {
    encrypt(account: Account): LoginResposne;
}