import React, {useEffect, useState} from 'react';
import './App.css';
import {Items} from './components/Items';
import {ItemsForm} from './components/ItemsForm';
import { Container } from 'semantic-ui-react';

function HomePage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
     fetch('/api/items-all').then(response => 
      response.json().then(data => {
       setItems(data);
      })
     );
  }, []);  
  

  return (
      <div>
        <div className='TableItems'>
          <Container>
            <Items items={items} />
            <ItemsForm 
              onNewItem={item => 
                setItems(currentItems => items.item === null ? [item] : [...currentItems, item])} />
          </Container> 
        </div>
      </div>
  );
}

export default HomePage;
