import styled from 'styled-components'
import { Link } from "react-router-dom";
import Svg from 'components/Svg'
const NavWrapper = styled.nav`
  line-height:24px;
  box-shadow: 0 0 3px rgba(0,0,0,.25);
  > ul {
    display:flex;
    > li {
      width:33.33333%;
      text-align:center;
      padding: 5px 0;
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      .icon{
        width:19px;
        height:19px;
      }
    }
  }
`

const Nav = ()=>{
    return(
       <NavWrapper>
        <ul>
            <li>
             <Svg name='tags' />
             <Link to="/tags">标签页</Link>
            </li>
          <li>
              <Svg name='statistics' / >
              <Link to="/money">记账页</Link>
            </li>
          <li>
              <Svg name='money' />
              <Link to="/statistics">统计页</Link>
            </li>
          </ul>
       </NavWrapper> 
    )
}

export default Nav


