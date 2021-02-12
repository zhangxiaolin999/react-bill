import React from 'react';
import styled from "styled-components";


const Lable = styled.label`
      display:flex;
      align-items:center;
       >span{margin-right:16px;white-space:nowrap}
       >input{
         display:block;
         width:100%;
         height:44px;
         background:none;
         border:none;
         font-size:14px;
         color:#333;
        }
`;

type Props = { label:string} & React.InputHTMLAttributes<HTMLInputElement>

const Input:React.FC<Props> = (props) =>{
    const { label,children,...rest } = props;
    return(
        <Lable>
            <span>{props.label}</span>
            <input {...rest} />
        </Lable>
    )
};

export default Input;
