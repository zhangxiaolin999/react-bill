import Layout from 'components/Layout';
import styled from "styled-components";
import TagsSection from 'pages/Money/TagsSection'
import NoteSection from 'pages/Money/NotesSection'
import CategorySection from 'pages/Money/CategorySection'
import NumberPadSection from 'pages/Money/NumberPadSection'
import React from 'react';

const MyLayout  = styled(Layout)`
  display:flex;
  flex-direction:column;
`

const Money:React.FC = ()=>{
    return(
      <MyLayout>
        <TagsSection />
        <NoteSection />
        <CategorySection />
        <NumberPadSection />
      </MyLayout>
    )
}
export default Money
