import { useState } from "react";

const useTags = () =>{
    const [tags,setTags] = useState<{id:number,value:string}[]>([
        {id:1,value:'衣'}, {id:2,value:'食'}, {id:3,value:'住'}, {id:4,value:'行'},
    ]);
    return { tags,setTags }
};

export default useTags