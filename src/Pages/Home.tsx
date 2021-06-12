import React from 'react';
import styled from 'styled-components';
import {Frame} from '../Components/Frame';
import {Text, Title} from '../Components/Text';
import {Button, ButtonText} from '../Components/Input';
import {IoQrCodeOutline, IoSearch} from 'react-icons/io5';

const IconSearch = styled(IoSearch)`
  font-size: 1.5rem;
  color: #0051BA;
`

const IconQr = styled(IoQrCodeOutline)`
  font-size: 1.5rem;
  color: #0051BA;
`

function Home() {
    return (
        <Frame>
            <Title>Hi</Title>
            <Text>Missing a part? Let's get you a replacement!</Text>
            <Text>You can use standard text search or we can try to recognize it using your camera.</Text>
            <Button to="/search">
                <ButtonText>Find your product</ButtonText>
                <IconSearch />
            </Button>
            <Button to="/scan">
                <ButtonText>Scan using a camera</ButtonText>
                <IconQr />
            </Button>
        </Frame>
    )
}

export default Home;
