import React from 'react';
import styled from 'styled-components';
import {Frame} from '../Components/Frame';
import {Title} from '../Components/Text';
import {ListItemBuy} from "../Components/ListItem";
import buy from "../Assets/buy";
import {useParams} from "react-router-dom";
import items from "../Assets/items";
import {Button, ButtonAnchor, ButtonText} from "../Components/Input";


const Image = styled.img`
  display: block;
  padding: 10px;
  max-height: 300px;
  margin: 0 auto;
`

const Divider = styled.div`
  height: 2px;
  width: 100px;
  margin: 30px auto;
  background: #eee;
`

const SmallText = styled.span`
  display: block;
  color: #212121;
  font-weight: 300;
  margin: 10px 20px 0;
`

function Item(props: any) {
    // @ts-ignore
    const {id} = useParams()
    const item = items[id]

    return (
        <Frame>
            <Title>Your awesome {item.title}</Title>
            <Image src={item.image} />
            <Divider />
            <ButtonAnchor href={item.eshop}><ButtonText>BUY</ButtonText></ButtonAnchor>
            <SmallText>EAN 420133769</SmallText>
            <SmallText>CODE a67h4d</SmallText>
            <Divider />
            {buy.map((x, i) => <ListItemBuy item={x} key={i} />)}
        </Frame>
    )
}

export default Item;
