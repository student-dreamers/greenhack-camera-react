import React, {useState} from 'react';
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
            <p>{product.toString()}</p>
            <IFrame allow="camera;microphone" src='https://student-dreamers.github.io/greenhack-camera/' title='camera' />
        </FrameBorderless>
    )
}

export default Scan;
