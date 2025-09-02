// const msauth = '';
const msauth = 'http://localhost:8882';

// const msuser = '';
const msuser = 'http://localhost:8882';

// const msmenu = '';
const msmenu = 'http://localhost:8883';

export const enum ApiLogin {
    AUTH = `${msauth}/auth/login`,
    REFRESH = `${msauth}/auth/refresh`
};

export const enum ApiUser {
    GET_BY_EMAIL = `${msuser}/user/email`,
    CREATE = `${msuser}/user/create`
};

export const enum ApiMenu {
    DAILY = `${msmenu}/menu/daily`,
};
