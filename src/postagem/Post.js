import React from 'react';
import { Card } from 'react-bootstrap';

const Post = ({content, authorName, authorUserName, timestamp}) => {
    return (

        <Card style={{ width: '50rem' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
                <Card.Title>{authorName} - {authorUserName} - {timestamp}</Card.Title>
                <Card.Text>
                    {content}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Post;