import Cookie from 'js-cookie';
const tokenKey = 'access_token';

export function setToken(token:string){
    Cookie.set(tokenKey,token)
}

export function getToken(){
    return Cookie.get(tokenKey)
}

export function removeToken() {
    Cookie.remove(tokenKey)
}