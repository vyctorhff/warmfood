import { Account } from "../../core/domain/acount.domain.ts";
import { LoginResponse } from "../../core/domain/login.domain.ts";
import { EncryptUser } from "../../core/usercase/user.security.ts";

export class JwtFake implements EncryptUser {
  encrypt(account: Account): Promise<LoginResponse> {
    return Promise.resolve({
        token: 'xxxxxx',
        refresh: 'yyyyy',
        date: new Date()
    });
  }
}