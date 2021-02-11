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
    const onChange = (obj: Partial<typeof selected>)=>{
        setSelected({...selected,...obj })
    };
    return(
      <MyLayout>
        <TagsSection value={selected.tags} onChange={(tags) => onChange({tags})} />
        <NoteSection value={selected.note} onChange={(note)=>onChange({note}) } />
        <CategorySection value={selected.category}  onChange={(category)=> onChange({category}) } />
        <NumberPadSection value={selected.amount}  onChange={(amount)=> onChange({amount})} />
      </MyLayout>
    )
};
export default Money
