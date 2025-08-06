import { JWTPayload, jwtVerify, SignJWT } from "npm:jose@5.9.6";
import { EncryptUser } from "../../core/usercase/user.security.ts";
import { Account } from "../../core/domain/acount.domain.ts";
import { LoginResponse } from "../../core/domain/login.domain.ts";
import { Logger } from "../../core/usercase/logger.ts";

const secret = new TextEncoder().encode("secret-very-hard-to-know");// TODO: set env
const expirationTime = "1h";// TODO: set env

export class JwtSecurity implements EncryptUser {

  constructor(private log: Logger) {}

  async encrypt(account: Account): Promise<LoginResponse> {
    const jwt = await new SignJWT(account)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime(expirationTime)
        .sign(secret);

    return {
        token: jwt,
        refresh: 'not yet implemented',
        date: new Date()
    };
  }

  async decrypt(jwt: string): Promise<JWTPayload | null> {
    try {
      const { payload } = await jwtVerify(jwt, secret);
      return payload;
    } catch (error) {
      this.log.error(error);
      return null;
    }
  }
}