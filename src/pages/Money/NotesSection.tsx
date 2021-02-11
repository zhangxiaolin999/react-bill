import styled from "styled-components";
import React, {useState} from 'react';

const Wrapper = styled.section`
    background-color:#fff;
    padding: 0 16px;
    font-size:14px;
    >label{
      display:flex;
      align-items:center;
       >span{margin-right:16px;white-space:nowrap}
       >input{
         display:block;
         width:100%;
         height:72px;
         background:none;
         border:none;
         font-size:14px;
         color:#333;
        }
    }
`;

const NoteSection:React.FC = () =>{
    const [note,setNote] = useState('');
    return(
        <Wrapper>
        <label>
        <span>备注</span>
        <input type="text" placeholder='在这里添加备注'
               value={note}
               onChange={(e)=>setNote(e.target.value)}
        />
        </label>
        </Wrapper>
    )
};

export default NoteSection

