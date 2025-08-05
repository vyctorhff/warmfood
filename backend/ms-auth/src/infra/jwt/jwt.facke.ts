import { Account } from "../../core/domain/acount.domain.ts";
import { LoginResposne } from "../../core/domain/login.domain.ts";
import { EncryptUser } from "../../core/usercase/user.security.ts";

export class JwtFacke implements EncryptUser {
  encrypt(account: Account): LoginResposne {
    return {
        token: 'xxxxxx',
        refresh: 'yyyyy',
        date: new Date()
    };
  }
}