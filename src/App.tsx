import React from 'react';
import styled from 'styled-components'
import { HashRouter as Router,Switch, Route,Redirect } from "react-router-dom";
import  Nav from 'components/Nav';

const Wrapper = styled.div`
  height:100vh;
  display:flex;
  flex-direction:column;
`
const Main = styled.div`
  flex-grow:1;
  overflow:auto;
`

function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
        <Switch>
          <Route path="/tags">
            <Tags />
          </Route>
          <Route path="/money">
            <Money />
          </Route>
          <Route path="/statistics" exact>
            <Statistics />
          </Route>
          <Redirect exact from='/' to='/money' /> {/* 默认路由 */}
          <Route path='*'>
             <NoMatch />
          </Route>
        </Switch>
        </Main>

        <Nav />
      </Wrapper>
    </Router>
  );
}
function Statistics() {
  return <h2>统计页面</h2>;
}
function Tags() {
  return <h2>标签页面</h2>;
}
function Money() {
  return <h2>记账页面</h2>;
}
function NoMatch() {
  return <h2>404</h2>
}

export default App
