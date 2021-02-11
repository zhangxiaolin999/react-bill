import Layout from 'components/Layout';
import styled from "styled-components";
import TagsSection from 'pages/Money/TagsSection'
import NoteSection from 'pages/Money/NotesSection'
import CategorySection from 'pages/Money/CategorySection'
import NumberPadSection from 'pages/Money/NumberPadSection/NumberPadSection'
import React, {useState} from 'react';

const MyLayout  = styled(Layout)`
  display:flex;
  flex-direction:column;
`;

type Category = 0 | 1

const Money:React.FC = ()=>{
    const [selected,setSelected] = useState({
        tags:[] as string[],
        note: '',
        category: 0 as Category,
        amount: 0
    });
    return(
      <MyLayout>
        <TagsSection value={selected.tags} onChange={(tags)=>setSelected({...selected, tags })} />
        <NoteSection value={selected.note} onChange={(note)=>{setSelected({...selected,note})}} />
        <CategorySection value={selected.category}  onChange={(category)=>{setSelected({...selected,category})}} />
        <NumberPadSection value={selected.amount}  onChange={(amount)=>{setSelected({...selected,amount})}} />
      </MyLayout>
    )
};
export default Money
