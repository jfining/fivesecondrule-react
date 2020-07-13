import React from 'react';
import { Card, Button, Row } from 'react-bootstrap';

function InGame(props) {
    return (
        <div className="game-container">
            <Row className="justify-content-center">
                <p>In Game!</p>
            </Row>
            <Row className="justify-content-center">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>You're asking Bob</Card.Title>
                        <Card.Text>Bob, name 3 things that are yellow.</Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Button>Next Card</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>5</Card.Title>
                    </Card.Body>
                    <Card.Body>
                        <Button variant="secondary">Reset</Button>
                        <Button>Start</Button>
                    </Card.Body>
                </Card>
            </Row>
        </div>
    )
}

export default InGame