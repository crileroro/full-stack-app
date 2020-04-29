import React from 'react';
import {Modal, Icon, Header} from 'semantic-ui-react';

export const ItemMessage = ({status, closeMessage, typeMessage}) => {

    var name = 'attention';
    var color = 'olive';
    var message = {title: 'Empty Fields', description: 'Check your items. Some of the fields are empty.'};

    if (typeMessage === 201){
        name = 'check circle';
        color = 'green';
        message = {title: 'Success!', description: 'Your item was added properly.'};
    } 
    else if (typeMessage === 200){
        name = 'alarm';
        color = 'yellow';
        message = {title: 'Duplicated Item', description: 'It seems that this item is already on the list.'};
    }
            
    
    return (
        <Modal open={status} onClose={() => closeMessage(false)}>
            <Header as='h1' icon >
                <Icon name={ name } size='huge' color={ color } /> 
                { message.title } 
            </Header>
            <Modal.Content>{ message.description }</Modal.Content>
        </Modal>
    );
    
}