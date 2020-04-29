import React from 'react';
import { Header, Icon } from 'semantic-ui-react';
import './App.css';

function OtherPage() {
    return (
        <div className='OtherPage'>
            <Header icon textAlign='center'>
                <Icon name='paper plane' color='orange' />
                This is another page.
            </Header>
        </div>
    );
}

export default OtherPage