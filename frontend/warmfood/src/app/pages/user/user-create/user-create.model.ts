import { NgForm } from "@angular/forms"

export const createUserCreateFromForm = (form: NgForm): UserCreateModel => {
    return {
        email: form.value.email,
        pass: form.value.pass,
        name: form.value.name,
        phone: form.value.phone,
        delivery: {
            type: form.value.type,
            location: form.value.location,
        }
    };
};

export type UserCreateResponse = {
}

export type UserCreateModel = {
    email: string,
    pass: string,
    name: string,
    phone: string,
    delivery: {
        type: string,
        location: string,
    }
}