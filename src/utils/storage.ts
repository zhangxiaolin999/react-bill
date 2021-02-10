type application = {name:string,data:any}

export function savelocal(name:application, data: application) {
    localStorage.setItem(name,JSON.stringify(data))
}

export function getlocal(name:application){
    const result = window.localStorage.getItem(name);
    if (result && result !== 'undefined') {
    return JSON.parse(result);
     }
    return false;
}

export function removelocal(name:application){
    localStorage.removeItem(name)
}

export function savesession(name:application,data:application){
    sessionStorage(name,JSON.string(data))
}

export function getsession(name:application){
    const result = window.sessionStorage.getItem(name);
    if (result && result !== 'undefined') {
    return JSON.parse(result);
     }
    return false;
}

export function removesession(name:application){
    sessionStorage.removeItem(name)
}