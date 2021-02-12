import styled from "styled-components";
import React, {ChangeEventHandler} from 'react';
import Lable from 'components/LabelInput/lable'

const Wrapper = styled.section`
    background-color:#fff;
    padding: 14px 16px;
    font-size:14px;
`;

type Props = { value:string, onChange:(value:string)=>void }

const NoteSection:React.FC<Props> = (props) =>{
    const note = props.value;
    const onChange:ChangeEventHandler<HTMLInputElement> = (e) =>{
        props.onChange(e.target.value)
    };
    return(
        <Wrapper>
        <Lable label='备注' type='text' value={note} onChange={ onChange } placeholder='请填写备注' />
        </Wrapper>
    )
};

export default NoteSection

