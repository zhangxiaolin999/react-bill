
// localStorage
export function savelocal(name:string, data: any) {
    window.localStorage.setItem(name,JSON.stringify(data))
}

export function getlocal(name:string){
    const result = window.localStorage.getItem(name);
    if (result && result !== 'undefined') {
    return JSON.parse(result);
     }
    return false;
}

export function removelocal(name:string){
    window.localStorage.removeItem(name)
}

  //  sessionStorage
export function savesession(name:string,data:any){
    window.sessionStorage.setItem(name,JSON.stringify(data))
}

export function getsession(name:string){
   const  result =  window.sessionStorage.getItem(name)
   if (result && result !== 'undefined'){
      return JSON.parse(result);
   }
      return false
}

export function removesession(name:string){
    window.sessionStorage.removeItem(name)
}