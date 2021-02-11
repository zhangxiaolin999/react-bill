import styled from "styled-components";
import React, {useState} from 'react';
import { Modal } from 'antd-mobile';
const prompt = Modal.prompt;

const Wrapper = styled.section`
background-color:#fff;
padding:12px 16px;
flex-grow:1;
display:flex;
flex-direction:column;
justify-content:flex-end;
align-items:flex-start;
>ol{
  margin: 0 -12px;
  >li{
    background-color:#D9D9D9;
    border-radius:18px;
    display:inline-block;
    padding:3px 18px;
    font-size:14px;
    margin:8px 12px;
    &.selected{
    background: #6699CC;
   }
  }
}
> button{
  background:none;
  border:none;
  border-bottom: 1px solid #333;
  padding: 2px 4px;
  color:#666;
  margin-top:8px;
}
`;

const TagSection:React.FC = (props)=>{
    const [tags,setTags] = useState<string[]>(['衣','食','住','行']);
    const [selectedTags,setSelectedTags] = useState<string[]>([]);
    const onAddTag = () =>{
        prompt('新增标签', '', [ { text: '取消' },
            { text: '提交', onPress: ((value)=>{
                    const tagName  = value;
                    if (tagName) setTags([...tags,tagName]);
                }) },
        ], 'default', '')
    };
    const onToggleTag = (tag:string) =>{
        console.log(selectedTags);
        console.log(tag);
        const index = selectedTags?.indexOf(tag);
        if(index >= 0 ){
            setSelectedTags(selectedTags?.filter(t => t !== tag))
        }else{
            setSelectedTags([...selectedTags,tag])
        }
    }
    const  GetClassName = (tag:string) => selectedTags.indexOf(tag) >= 0 ? 'selected' :''
    return(
    <Wrapper>
     <ol>
         {tags.map(tag => <li
             onClick={()=>onToggleTag(tag)}
             key={tag}
             className={GetClassName(tag)}
         >{tag}</li>)}
     </ol>
     <button onClick={() => onAddTag()}>新增标签</button>
    </Wrapper>
    )
}

export default TagSection

     