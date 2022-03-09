import React, { useEffect, useState } from 'react';
import {Container, Row, ListGroup, Button} from 'react-bootstrap'

export default App => {
    
    let [currentKeyDown, setCurrentKeyDown] = useState('');

    //Each index corresponds to a pad on DRUM_PADS
    const DRUM_PADS_AUDIO = [
          "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
        
          "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
        
          "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
        
          "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
        
          "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
        
          "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
        
          "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
        
          "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
        
          "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      ];

    const DRUM_PADS = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']

    let generateDrumPads = () => {
        return DRUM_PADS.map(pad => {
            let key = "padKey_" + pad;
            return (
                <ListGroup.Item key={key}>
                        {/*This onClick bullsh- was so annoying to figure out why it wouldnt work at first */}
                        <Button id="key" className="drum-pad" 
                            onClick={() => {
                                setCurrentKeyDown(pad);
                                document.getElementById(pad).play()
                        }}>
                        {pad}
                        <audio src={DRUM_PADS_AUDIO[DRUM_PADS.indexOf(pad)]} className="clip" id={pad}></audio>
                    </Button>
                </ListGroup.Item>
            )
        });
    }

    let keyDownHandler = (keyInfo) => {
        //console.log(keyInfo.key.toUpperCase());
        
        let keyInfoPad = keyInfo.key.toUpperCase();

        switch(DRUM_PADS.some((pad) => {
            //console.log(pad);
            //console.log(keyInfo.key.toUpperCase());
            
            return pad === keyInfoPad;
        })){
            case true:
                document.getElementById(keyInfoPad).play();
                setCurrentKeyDown(keyInfoPad);
                
        }

    }

    useEffect(() => {
        document.addEventListener("keydown", keyDownHandler)
        
    });

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
            <Row className="text-center">
                <h4>Pad Hit: {currentKeyDown}</h4>
            </Row>
        </Container>
      );
}