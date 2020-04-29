import React from 'react';
import './App.css';
import { Header, Icon, HeaderContent, List } from 'semantic-ui-react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import OtherPage from './OtherPage';
import HomePage from './HomePage';

function App() {
 
  return (
    <Router> 
      <div>
        <Header as='h3' icon block textAlign='center'>
          <Icon name='shop' circular color='orange'/>
          <HeaderContent>Shopping Online</HeaderContent>
        </Header>
        <div>
          <Route exact path='/' component={HomePage} />
          <Route path='/otherpage' component={OtherPage} />
        </div>
        <div className='Links' >
          <List horizontal divided>
            <List.Item>
              <Link to='/'>Home Page</Link>
            </List.Item>
            <List.Item>
              <Link to='/otherpage'>Other Page</Link>
            </List.Item>
          </List>
        </div>
      </div>
    </Router>
  );
}

export default App;
