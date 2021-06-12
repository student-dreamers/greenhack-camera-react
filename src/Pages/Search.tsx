import React, {useState} from 'react';
import {
    useParams
} from 'react-router-dom';
import {Frame} from '../Components/Frame';
import {Title} from '../Components/Text';
import {Input} from '../Components/Input';
import {ListItem} from '../Components/ListItem';


function Search(props: any) {
    // @ts-ignore
    const {searchText} = useParams()
    const {items} = props
    const [text, setText] = useState(searchText ? searchText : '');

    return (
        <Frame>
            <Title>Search</Title>
            <Input onChange={(ev: any) => setText(ev.currentTarget.value)} value={text} placeholder='Search...'/>
            {
                items
                    .map((x: any, i: number) => [x, i])
                    .filter((x: [any, number]) =>
                        x[0].title.toLowerCase().indexOf(text.toLowerCase()) !== -1 ||
                        x[0].tags.some((y: string) => y.toLowerCase().indexOf(text.toLowerCase()) !== -1))
                    .map((x: any) => <ListItem item={x[0]} id={x[1]} key={x[1]} />)
            }
        </Frame>
    )
}

export default Search;
