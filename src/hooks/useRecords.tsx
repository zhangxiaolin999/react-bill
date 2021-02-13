import {useEffect, useState} from "react";
import {useUpdate} from "./useUpdate";
import {getlocal, savelocal} from "../lib/storage";
import {Toast} from "antd-mobile";


export type RecordItem = {
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
            if(newRecord.amount <= 0) { Toast.info('请输入金额', 1);return false };
            if(newRecord.tagIds.length  === 0) { Toast.info('请选择标签');return false; }
            const record  = {...newRecord,createAt: (new Date()).toISOString() };
            setRecords([...records,record]);
        return true
    };
    return {records,setRecords,addRecords}
};
export  {useRecords}