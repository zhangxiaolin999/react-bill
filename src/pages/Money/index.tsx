import Layout from 'components/Layout';
import styled from "styled-components";
import TagsSection from 'pages/Money/TagsSection'
import NoteSection from 'pages/Money/NotesSection'
import CategorySection from 'pages/Money/CategorySection'
import NumberPadSection from 'pages/Money/NumberPadSection/NumberPadSection'
import React, {useState} from 'react';
import {useRecords} from "../../hooks/useRecords";
import {Toast} from "antd-mobile";

const MyLayout  = styled(Layout)`
  display:flex;
  flex-direction:column;
`;

type Category = 0 | 1;
const defaultFromData = {
    tagIds:[] as number[],
    note: '',
    category: 0 as Category,
    amount: 0,
};

const Money:React.FC = ()=>{
    const [selected,setSelected] = useState(defaultFromData);
        const { addRecords } = useRecords();

    const onChange = (obj: Partial<typeof selected>)=>{
        setSelected({...selected,...obj })
    };
    const submit = () =>{
        if(addRecords(selected)){
            Toast.success('添加成功!', 1);
            setSelected(defaultFromData)
        }
    };
    return(
      <MyLayout>
        <TagsSection value={selected.tagIds} onChange={(tagIds) => onChange({tagIds})} />
        <NoteSection value={selected.note} onChange={(note)=>onChange({note}) } />
        <CategorySection value={selected.category}  onChange={(category)=> onChange({category}) } />
        <NumberPadSection value={selected.amount} onOk={submit}   onChange={(amount)=> onChange({amount})} />
      </MyLayout>
    )
};
export default Money
