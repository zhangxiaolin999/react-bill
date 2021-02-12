import React from "react";
import { useParams } from "react-router-dom";
import useTags from "hooks/useTags";
import Layout from "components/Layout";
import Icon from "components/Svg";
import AButton from "components/Button/gray";
import styled from "styled-components";
import Lable from 'components/LabelInput/lable'
import Center from "components/Center";
import Space from "components/Space";

type Params = {  id:string  }



const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;
`;

const  LableWrapper = styled.div`
  background-color: white;
  padding: 0 16px;
  margin-top: 8px;
`;


const TagEdit: React.FC = ()=>{
    const { id } =  useParams<Params>();
    const { findTag } = useTags();
    const tag = findTag(parseInt(id));
    return(
        <Layout>
            <Topbar>
                <Icon name='left'/>
                <span>编程标签</span>
                <Icon />
            </Topbar>
            <LableWrapper>
                <Lable label='标签名' type='text' placeholder='标签名' />
            </LableWrapper>
            <Center>
                <Space />
                <Space />
                <Space />
                <AButton>修改标签</AButton>
            </Center>
        </Layout>
    )
};

export default TagEdit