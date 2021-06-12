import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import styled from 'styled-components';
import {IoInformationCircleOutline} from 'react-icons/io5'
import Home from "./Pages/Home";
import Scan from "./Pages/Scan";
import Search from "./Pages/Search";
import items from "./Assets/items";
import Item from "./Pages/Item";
import Buy from "./Pages/Buy";
import Help from "./Pages/Help";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 15px;
`;

const Title = styled(Link)`
  font-size: 2rem;
  font-weight: 900;
  color: #0051BA;
  text-decoration: none;
`

const IconInfo = styled(IoInformationCircleOutline)`
  font-size: 2rem;
  color: #FFDA1A;
`

function App() {
    return (
        <>
            <Nav>
                <Title to='/'>SCREWIT</Title>
                <Link to='/help'><IconInfo /></Link>
            </Nav>
            <Switch>
                <Route path='/' exact>
                    <Home />
                </Route>
                <Route path='/scan' exact>
                    <Scan />
                </Route>
                <Route path='/search' exact>
                    <Search items={items} />
                </Route>
                <Route path='/search/:searchText'>
                    <Search items={items} />
                </Route>
                <Route path='/item/:id' exact>
                    <Item />
                </Route>
                <Route path='/buy/screw' exact>
                    <Buy />
                </Route>
                <Route path='/help' exact>
                    <Help />
                </Route>
            </Switch>
        </>
    );
}

export default App;
