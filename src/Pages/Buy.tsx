import React from 'react';
import {Frame} from '../Components/Frame';
import {Text, Title} from '../Components/Text';
import {IoCheckmarkCircleOutline} from 'react-icons/io5';
import styled from "styled-components";
import {ListItem} from "../Components/ListItem";
import buy from "../Assets/buy";

const IconCheck = styled(IoCheckmarkCircleOutline)`
  display: block;
  width: 200px;
  height: 200px;
  color: #2ECC40;
  margin: 0 auto;
`

function Buy() {
    return (
        <Frame>
            <Title>Order 42069</Title>
            <IconCheck />
            <Text>Your order is waiting for you at the store.</Text>
            <ListItem item={buy[0]} />
        </Frame>
    )
}

export default Buy;
