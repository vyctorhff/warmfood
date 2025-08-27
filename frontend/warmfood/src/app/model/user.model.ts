import { Perfil } from "./user-session.model"

export type GetByEmailResponse = {   
    id: string,
    name: string,
    email: string,
    perfil: Perfil,
    dataCreated: Date,
}