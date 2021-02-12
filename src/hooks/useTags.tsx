import { useState } from "react";
import {createId} from "lib/createId";


const defaultTags  = [  {id:createId(),value:'衣'},{id:createId(),value:'食'},{id:createId(),value:'住'},{id:createId(),value:'行'},];

const useTags = () =>{
    const [tags,setTags] = useState<{id:number,value:string}[]>(defaultTags);
    const findTag = (id:number) =>{ return  tags.filter(tag =>  id === tag.id)[0]};

    return { tags,setTags,findTag }
};

export default useTags