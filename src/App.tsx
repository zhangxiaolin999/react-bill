import React from 'react';
import { HashRouter as Router,Switch, Route,Redirect } from "react-router-dom";
import Tags from 'pages/Tags'
import Money from 'pages/Money'
import Statistics from 'pages/Statistics'
import NoMatch from 'pages/NoMatch'
import Home from 'pages/home';
import TagEdit from "pages/TagEdit";

function App() {
  return (
    <Router>
      <Switch>
          <Route path='/' exact>
              <Home />
          </Route>
          <Route exact path="/tags">
            <Tags />
          </Route>
          <Route path="/tags/:tag">
              <TagEdit />
          </Route>
          <Route path="/money">
            <Money />
          </Route>
          <Route path="/statistics" exact>
            <Statistics />
          </Route>
          <Redirect exact from='/' to='/' /> {/* 默认路由 */}
          <Route path='*'>
             <NoMatch />
        </Route>
        </Switch>
      </Router>
  );
}
export default App
