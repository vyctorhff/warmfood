export type LoginRequest = {
    login: string,
    pass: string,
}

export type LoginResposne = {
    token: string,
    refresh: string,
    date: Date,
}
