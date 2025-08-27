import { NgForm } from "@angular/forms";

export type LoginRequest = {
    user: string,
    pass: string,
}

export const createLoginModelFromForm = (form: NgForm): LoginRequest => {
    return {
        user: form.value.user,
        pass: form.value.pass,
    }
};

export interface LoginResponse {
    token: string,
    refresh: string,
    date: string, 
}
