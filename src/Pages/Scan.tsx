import React, {useState} from 'react';
import {Frame} from '../Components/Frame';
import {Title} from '../Components/Text';
import styled from "styled-components";
import {Button, ButtonText} from "../Components/Input";

const FrameBorderless = styled(Frame)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
`

const TextSmall = styled.span`
  margin: 10px;
  color: #212121;
  font-weight: 300;
  font-size: 0.9rem;
`

const IFrame = styled.iframe`
  flex: 1;
  width: 100%;
  border: none;
  margin: 0;
  padding: 0;
`

function Scan() {
    const [product, setProduct] = useState('')

    window.ikea = (s: any) => {
        console.log('SCAN: ', s)
        if (s)
            setProduct(s)
    };

    return (
        <FrameBorderless>
            <Title>Scan</Title>
            <TextSmall>Activate your camera by tapping on the black box</TextSmall>
            <IFrame allow="camera;microphone" src='https://student-dreamers.github.io/greenhack-camera/' title='camera' />
            <div style={{
                opacity: product ? 1 : 0.1,
                pointerEvents: product ? 'all' : 'none'
            }}>
                <TextSmall>Found: {product ? product : '...'}</TextSmall>
                <Button to={product ? `/search/${product}` : '#'}><ButtonText>Search for {product ? product : '...'}</ButtonText></Button>
            </div>
        </FrameBorderless>
    )
}

export default Scan;
