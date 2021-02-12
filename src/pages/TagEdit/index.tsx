import React, {ChangeEventHandler} from "react";
import { useParams,useHistory } from "react-router-dom";
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
    const { findTag,updateTag,deleteTag } = useTags();
    const tag = findTag(parseInt(id));
    const history = useHistory();
    const onClickBack = () => history.goBack();

    const tagContent = (tag: { id: number; value: string }) => (
        <div>
            <LableWrapper>
                <Lable label="标签名" type="text" placeholder="标签名"
                       value={tag.value}
                       onChange={(e)=> {updateTag(tag.id,{value:e.target.value})} }
                />
            </LableWrapper>
            <Center>
                <Space/>
                <Space/>
                <Space/>
                <AButton onClick={() => {
                    deleteTag(tag.id);
                }}>删除标签</AButton>
            </Center>
        </div>
    );

    return(
        <Layout>
            <Topbar>
                <Icon name='left'  onClick={onClickBack} />
                <span>编程标签</span>
                <Icon />
            </Topbar>
            {tag ? tagContent(tag) : <Center>tag 不存在</Center>}
        </Layout>
    )
};

export default TagEdit
