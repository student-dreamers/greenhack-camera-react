import React, {useEffect, useState} from 'react';
import {Frame} from '../Components/Frame';
import {Title} from '../Components/Text';
import styled from "styled-components";

const FrameBorderless = styled(Frame)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
`

const IFrame = styled.iframe`
  flex: 1;
  border: none;
  margin: 0;
  padding: 0;
`

function Scan() {
    const [product, setProduct] = useState('')
    const handleMessage = (e: MessageEvent) => {
        if (e.data.type === 'IKEA')
            setProduct(e.data.ikeaName)
    }

    useEffect(() => {
        window.addEventListener('message', handleMessage);

        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, []);

    return (
        <FrameBorderless>
            <Title>Scan</Title>
            <p>{product.toString()}</p>
            <IFrame allow="camera;microphone" src='https://student-dreamers.github.io/greenhack-camera/' title='camera' />
        </FrameBorderless>
    )
}

export default Scan;
