import React, { useState } from 'react';
import { Form, Input, Button, Icon } from 'semantic-ui-react';
import {ItemMessage} from './ItemMessage';

export const ItemsForm = ({onNewItem}) => {
    const [item, setItem] = useState("");
    const [price, setPrice] = useState("");
    const [showMessage, setShowMessage] = useState(false);
    const [responseCode, setResponseCode] = useState(404);

    return (
        <Form>
            <Form.Field>
                <Input 
                    placeholder="Item Name" 
                    value={item} 
                    onChange={e => setItem(e.target.value)} 
                />
            </Form.Field>
            <Form.Field>
                <Input 
                    placeholder="Item Price" 
                    value={price} 
                    onChange={e => setPrice(e.target.value)} 
                    type="number"
                />
            </Form.Field>
            <Button animated='vertical' 
                    onClick={ async () => {
                        const itemFormat = {'name': item, 'price': price};
                        const response = await fetch('/api/item/' + item, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({'price': itemFormat.price})
                        })

                        if (response.status === 201) {
                            onNewItem(itemFormat);
                        }

                        setResponseCode(response.status);
                        setShowMessage(true);
                        setItem("");
                        setPrice("");
                    }} 
            >
                <Button.Content visible>Go!</Button.Content>
                <Button.Content hidden>
                    <Icon name='shopping bag'/>
                </Button.Content>
            </Button>
            <ItemMessage
                 status={showMessage} 
                 closeMessage={status => setShowMessage(status)}
                 typeMessage={responseCode}
            >
            </ItemMessage>
        </Form>
    )
}