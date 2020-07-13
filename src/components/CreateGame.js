import React from 'react';
import { Form, Button } from 'react-bootstrap';

function CreateGame(props) {
    const onSubmit = () => {
    // Call out to server and create a game
    //Probably will have to pass game info back to parent App.js...
    //Another "startGame" function passed in from parent should be better
    props.setGameState("inGame");
    }
    return (
        <div>
            <p>Create Game!</p>
            <Form onSubmit={onSubmit}>
                <Form.Group>
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Make it something fun!"></Form.Control>
                    <Form.Text className="text-muted">Other players will see your name.</Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">Start!</Button>
            </Form>
        </div>
    )
}

export default CreateGame