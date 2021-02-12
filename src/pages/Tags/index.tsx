import React from "react";
import Svg from 'components/Svg'
import Space from "components/Space";
import Layout from 'components/Layout'
import Center from "components/Center";
import AButton from "components/Button/gray";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import useTags from 'hooks/useTags'

const TagList = styled.ol`
    font-size: 16px;
    background-color: white;
        >li{
          border-bottom: 1px solid #d5d5d9;
          line-height: 20px;
          margin-left: 16px;
          >a{
              padding: 12px 16px 12px 0;
              display: flex;
              justify-content: space-between;
              align-items: center;
          }
        }
`;

const Tags = ()=> {
    const {tags} = useTags();
    return(
    <Layout>
        <TagList>
            { tags.map(tag => <li key={tag.id}>
                <Link to={'/tags/' + tag.id }>
                    <span className='oneLine'>{tag.value}</span>
                    <Svg name='right'/>
                </Link>
             </li>) }
        </TagList>
        <Center>
            <Space />
            <Space />
            <AButton>新增标签</AButton>
            <Space />
        </Center>
    </Layout>
  )
};

export default Tags
