import Layout from 'components/Layout'
import useTags from 'hooks/useTags'
import styled from "styled-components";
import Svg from 'components/Svg'
import React from "react";
import { Button } from 'antd-mobile';
import { Link } from 'react-router-dom';

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

const AddButton = styled(Button)`
    font-size: 18px;
    border: none;
    width: 98px;
    border-radius: 4px;
    background-color: #767676;
    color:white;
 `;
const  Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Space = styled.div`
      height: 16px;
 `;

const Tags = ()=> {
    const {tags,setTags} = useTags();
    return(
    <Layout>
        <TagList>
            { tags.map(tag => <li key={tag}>
                <Link to={'/tags/' + tag }>
                    <span className='oneLine'>{tag}</span>
                    <Svg name='right'/>
                </Link>
             </li>) }
        </TagList>
        <Center>
            <Space />
            <Space />
            <AddButton>新增标签</AddButton>
            <Space />
        </Center>
    </Layout>
  )
};

export default Tags
