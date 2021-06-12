import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {IoChevronForward} from 'react-icons/io5';

const ItemWrapper = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  min-height: 100px;
  padding: 15px 0;
  text-decoration: none;
  color: inherit;
`

const ItemImage = styled.img`
  height: 100%;
  max-height: 100px;
`

const ItemText = styled.div`
  flex: 1;
`

const ItemTitle = styled.span`
  display: block;
  font-weight: 600;
  font-size: 1.2rem;
  margin: 10px;
`

const ItemTag = styled.span`
  margin: 5px;
  padding: 5px;
  background: #eee;
  border-radius: 5px;
  font-size: .9rem;
`

const ItemArrow = styled(IoChevronForward)`
  color: #0051BA;
  font-size: 1.5rem;
`

const ItemStock = styled.div`
  margin: 5px;
  font-size: .9rem;
  color: #212121;
`

const ItemStockAmountNone = styled.span`
  color: #FF4136;
`

const ItemStockAmountPositive = styled.span`
  color: #2ECC40;
`

export function ListItem(props: any) {
    const {item, id} = props

    return (
        <ItemWrapper {...props} to={item.tags[0] === 'SCREW' ? '#' : `/item/${id}`}>
            <ItemImage src={item.image} />
            <ItemText>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemTag>{item.tags[0]}</ItemTag>
                {item.tags[1] && <ItemTag>{item.tags[1]}</ItemTag>}
            </ItemText>
            {item.tags[0] !== 'SCREW' && <ItemArrow />}
        </ItemWrapper>
    )
}

export function ListItemBuy(props: any) {
    const {item} = props

    return (
        <ItemWrapper {...props} to={`/buy/${item.tags[0].toLowerCase()}`} >
            <ItemImage src={item.image} />
            <ItemText>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemTag>{item.tags[0]}</ItemTag>
                {Object.keys(item.stock).map((k, i) => (
                    <ItemStock key={i}>
                        {k}: {item.stock[k] <= 0
                        ? <ItemStockAmountNone>{item.stock[k]}</ItemStockAmountNone>
                        : <ItemStockAmountPositive>{item.stock[k]}</ItemStockAmountPositive>}
                    </ItemStock>
                ))}
            </ItemText>
            <ItemArrow />
        </ItemWrapper>
    )
}
