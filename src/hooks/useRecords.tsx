import {useEffect, useState} from "react";
import {useUpdate} from "./useUpdate";
import {getlocal, savelocal} from "../lib/storage";


type RecordItem = {
    tagIds:number[],
    note:string,
    category: 0 | 1,
    amount:number,
    createAt:string
}

type newRecordItem = Omit<RecordItem, 'createAt'>

const useRecords = ()=>{
    const  [records,setRecords]  = useState<RecordItem[]>([]);
    useEffect(()=>{
        setRecords(getlocal('records') || [])
    },[]);
    useUpdate(()=>{ savelocal('records',records) },[records]);
    const addRecords = (newRecord:newRecordItem) =>{
            const record  = {...newRecord,createAt: (new Date()).toISOString() }
            setRecords([...records,record])
    };
    return {records,setRecords,addRecords}
};
export  {useRecords}