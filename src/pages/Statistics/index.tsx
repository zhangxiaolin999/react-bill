import Layout from 'components/Layout'
import CategorySection from "../Money/CategorySection";
import React, {ReactNode, useState} from "react";
import styled from "styled-components";
import {RecordItem, useRecords} from "../../hooks/useRecords";
import useTags from "../../hooks/useTags";
import dayjs from "dayjs";

const CategorySectionWrapper = styled.div`
    background-color: white;
`;
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 0;
     > .note{
        margin-right: auto;
        margin-left: 16px;
        color: #999;
     }  
`;
const Header = styled.h3`
     font-size: 18px;
     line-height: 20px;
     padding: 10px 16px;
`;


const Statistics = () => {
    const [category,setCategory] = useState< 0 | 1 >(0);
    const {records} = useRecords();
    const { getTagName} = useTags();
    const hash:{[K:string] : RecordItem[] } = {};  // {'2020-05-11':[item,item],'2020-05-10':[item,item]}
    const selectedRecords = records.filter(r => r.category === category);

    selectedRecords.map(r=> {
      const key =  dayjs(r.createAt).format('YYYY-MM-DD')
        if (!(key in hash)) hash[key] = [];
        hash[key].push(r)
    });

    const array = Object.entries(hash).sort((a,b)=>{
        if(a[0] === b[0]) return 0;
        if(a[0] > b[0]) return -1;
        if(a[0] < b[0]) return 1;
        return 0
    });

  return (
    <Layout>
        <CategorySectionWrapper>
            <CategorySection
                value={category}
                onChange={value => setCategory(value)}
            />
        </CategorySectionWrapper>
        {array.map(([data,records])=> <div>
            <Header>
                {data}
            </Header>
            <div>
                {records.map((t,index) =>
                    <Item>
                        <div className="tags oneLine" >
                            {t.tagIds.map(r =>
                                <span key={r}>{getTagName(r)}</span>)
                                .reduce((result,span,index,array)=>
                                result.concat(index < array.length-1 ? [span,','] :[span]),[] as ReactNode[])
                            }
                        </div>
                        { t.note && <div className='note'>{t.note}</div> }
                        <br/>
                        <div className="amount">￥{t.amount}</div>
                    </Item>
                )}
            </div>
        </div> )}
    </Layout>
    )
};

export default Statistics