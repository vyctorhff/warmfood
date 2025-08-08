export type LoginRequest = {
    login: string,
    pass: string,
}

export type LoginResponse = {
    token: string,
    refresh: string,
    date: Date,
}
