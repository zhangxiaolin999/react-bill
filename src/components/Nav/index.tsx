import styled from 'styled-components'
import { NavLink } from "react-router-dom";
import Svg from 'components/Svg'
const NavWrapper = styled.nav`
  line-height:24px;
  box-shadow: 0 0 3px rgba(0,0,0,.25);
  > ul {
    display:flex;
    > li {
      width:33.33333%;
      text-align:center;
      &:active{
        background-color:#ddd;
      }
      > a{
        padding: 5px 0;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
      }
        .icon{
          width:19px;
          height:19px;
        }
        .selectAcitve{
          color:#6699CC;
          .icon{
            fill:#6699CC
          }
        }
    }
  }
`

const Nav = ()=>{
    return(
       <NavWrapper>
        <ul>  
            <li>
             <NavLink to="/tags"  activeClassName='selectAcitve'>
             <Svg name='tags' />
              标签页
             </NavLink>
            </li>
          <li>
              <NavLink to="/money" activeClassName='selectAcitve'>
                 <Svg name='statistics' / >
                记账页
              </NavLink>
            </li>
          <li>
              <NavLink to="/statistics" activeClassName='selectAcitve'>
                  <Svg name='money' />
                统计页
              </NavLink>
            </li>
          </ul>
       </NavWrapper> 
    )
}

export default Nav


