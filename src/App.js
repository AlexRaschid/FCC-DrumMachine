import React from 'react';
import {Container, Row, ListGroup, Button} from 'react-bootstrap'

export default App => {
    const DRUM_PADS = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
    
    let generateDrumPads = () => {
        return DRUM_PADS.map(pad => {
            let key = "padKey_" + pad;
            return (
                <ListGroup.Item key={key}>
                    <Button id="key" className="drum-pad">{pad}</Button>
                </ListGroup.Item>
            )
        });
    }

    return (
        <Container id="display" fluid>
            <Row className="text-center">
                <h1>Drum Machine by Alexander Raschid</h1>
            </Row>
            <Row className="text-center">
                <ListGroup>
                    {generateDrumPads()}
                </ListGroup>
            </Row>
        </Container>
      );
}