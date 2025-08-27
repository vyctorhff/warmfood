// const msauth = 'http://localhost:8081';
const msauth = 'http://localhost:8882';

// const msuser = 'http://localhost:8082';
const msuser = 'http://localhost:8882';

export const enum ApiLogin {
    AUTH = `${msauth}/auth/login`,
    REFRESH = `${msauth}/auth/refresh`
};

export const enum ApiUser {
    GET_BY_EMAIL = `${msuser}/user/email`,
    CREATE = `${msuser}/user/create`
};

export const enum ApiMenu {};
