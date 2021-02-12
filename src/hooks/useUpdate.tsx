import {useRef,useEffect} from "react";

const useUpdate = (fn:()=>void,deps:any[]) =>{
    const count = useRef(0);
    useEffect(()=>{count.current += 1});
    useEffect(()=>{if(count.current > 1) fn()},deps)
};

export  {useUpdate}

/**
 *
 *  不可变数据
 *  如果每次都产生新的tags就可以触发
 *  如果每次在tags里面修修补补(永远用同一个地址的对象)就会造成useEffect无法触发
 *  一定要做到每次修改都要是一个新的对象
 */


