import React from 'react';
import {Frame} from '../Components/Frame';
import {Text, Title} from '../Components/Text';

function Help() {
    return (
        <Frame>
            <Title>Help</Title>
            <Text>You may put some helpful information here, but you don't have to.</Text>
            <Text>For example scanning works only when the button lights up - at that moment a known object is detected.</Text>
            <Text>:)</Text>
        </Frame>
    )
}

export default Help;
