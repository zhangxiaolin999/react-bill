import { useState } from "react";
import {createId} from "lib/createId";
import {Modal} from "antd-mobile";
const prompt = Modal.prompt;

const defaultTags  = [  {id:createId(),value:'衣'},{id:createId(),value:'食'},{id:createId(),value:'住'},{id:createId(),value:'行'},];

const useTags = () =>{
    const [tags,setTags] = useState<{id:number,value:string}[]>([]);
    const findTag = (id:number) => tags.filter(tag =>  id === tag.id)[0];
    const findIndex = (id:number) => tags.findIndex(tag => tag.id === id) ;
    const updateTag =  (id:number,{value}:{value:string}) => setTags(tags.map(tag => tag.id === id  ? {id,value:value}: tag ));
    const deleteTag = (id:number) => setTags(tags.filter(tag => tag.id !== id));
    const addTag = () =>{
            prompt('新增标签', '', [ { text: '取消' },
                { text: '提交', onPress: ((value)=>{
                        const tagName  = value;
                        if (tagName) setTags([...tags,{id:createId(),value:tagName}]);
                    }) },
            ], 'default', '')
    };

    return { tags,setTags,findTag,updateTag,findIndex,deleteTag,addTag}
};

export default useTags