import
    styled from "styled-components";
import React, {useState} from 'react';

const CategorySection = styled.section`
font-size:24px;
> ul{
  display:flex;
  background-color:#c4c4c4; 
  > li{
    width:50%;
    text-align:center;
    padding:16px 0;
    position: relative;
    &.selected::after{
      content:'';
      height:3px;
      background-color:#333;
      position: absolute;
      left:0;
      bottom:0;
      width:100%;
    }
  }
}
`;
type Props = { value: 0 | 1 ,onChange: (value: 0 | 1)=>void }
const CategoriesSection: React.FC<Props> = (props) => {
    const categoriesMap = {0:'支出',1:'收入'};
    type Keys  = keyof typeof categoriesMap;
    const [categoriesList] = useState<Keys[]>([0,1]);
    const categories = props.value;
    return (
        <CategorySection>
            <ul>
                {
                    categoriesList.map(c =>
                        <li
                        className={categories === c ? 'selected':'' }
                        key={c}
                        onClick={()=> props.onChange(c)   }
                        >{categoriesMap[c]}</li>
                    )
                }
            </ul>
        </CategorySection>
    )
}

export default CategoriesSection
