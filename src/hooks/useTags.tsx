import { useState } from "react";
import {createId} from "lib/createId";

const defaultTags  = [  {id:createId(),value:'衣'},{id:createId(),value:'食'},{id:createId(),value:'住'},{id:createId(),value:'行'},];

const useTags = () =>{
    const [tags,setTags] = useState<{id:number,value:string}[]>(defaultTags);
    const findTag = (id:number) => tags.filter(tag =>  id === tag.id)[0];
    const findIndex = (id:number) => tags.findIndex(tag => tag.id === id) ;
    const updateTag =  (id:number,{value}:{value:string}) =>{
        setTags(tags.map(tag => tag.id === id  ? {id,value:value}: tag ))
    };
    const deleteTag = (id:number) =>{
        setTags(tags.filter(tag => tag.id !== id))
    };
    return { tags,setTags,findTag,updateTag,findIndex,deleteTag}
};

export default useTags