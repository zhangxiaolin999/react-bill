import {getlocal, savelocal} from "./storage";
let Id = getlocal('IdMax') || 0;
const createId = ()=>{
    Id += 1;
    savelocal('IdMax',Id);
    return Id;
};

export {createId};