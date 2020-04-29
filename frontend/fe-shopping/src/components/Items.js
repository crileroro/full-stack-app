import React from 'react';
import {Table, Header, Image, Segment, Icon} from 'semantic-ui-react';
import Book from './book.png'

export const Items = ({items}) => {   
    if (items.item === null){
        return (
            <Segment placeholder>
            <Header icon>
                <Icon name='tags' />
                <p>You have not added items yet!</p>
                <p>Add them here below.</p>
            </Header>
            </Segment>
        )
    }   
    return (
        <Table>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Item</Table.HeaderCell>
                    <Table.HeaderCell>Price</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {items.map((item) => {
                    return (
                        <Table.Row key={item.name}>
                            <Table.Cell>
                                <Header as='h2'>
                                    <Image src={Book} />
                                    <Header.Content>
                                        {item.name}
                                        <Header.Subheader>This is description for the 
                                            item {item.name}</Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                            <Table.Cell>{item.price}</Table.Cell>
                        </Table.Row>
                    );
                })}
            </Table.Body>
        </Table>
    );

};