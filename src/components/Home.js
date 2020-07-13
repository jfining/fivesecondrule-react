import React from 'react';
import { Button } from 'react-bootstrap';

function Home(props) {
    
    const onNewGameClick = () => {
        props.setGameState("creatingGame");
    }
    const onJoinGameClick = () => {
        props.setGameState("joiningGame");
    }
    return (
        <div>
            <p>Home!</p>
            <Button onClick={onNewGameClick}>New Game</Button>
            <Button onClick={onJoinGameClick}>Join Game</Button>
        </div>
    )
}

export default Home