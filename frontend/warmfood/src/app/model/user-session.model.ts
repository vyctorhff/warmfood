import { LoginResponse } from "../pages/login/login.model";
import { GetByEmailResponse } from "./user.model";

export enum Perfil {
    ADMIN,
    FINANCIAL,
    KITCHEN,
    USER,
}

export type UserSession = {
  id: string,
  name: string,
  email: string,
  perfil: Perfil | null,
  login?: {
    token: string,
    refresh: string,
  }
}

export const createUser = (): UserSession => {
    return createUserInvalidSession();
}

export const createUserByLoginAndUser = (loginRequet: LoginResponse, user: GetByEmailResponse): UserSession => {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    login: {
      token: loginRequet.token,
      refresh: loginRequet.refresh,
    },
    perfil: user.perfil,
  };
}

export const createUserInvalidSession = (): UserSession => {
    return {
        id: 'invalid',
        name: 'invalid',
        email: 'invalid',
        perfil: null,
    };
};

export const isUserPerfilAdmin = (user: UserSession): boolean => {
  return Perfil.ADMIN == user.perfil;
};

export const isUserPerfilUser = (user: UserSession): boolean => {
  return Perfil.USER == user.perfil;
};