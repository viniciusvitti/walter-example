import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import NewsScreen from './screens/NewsScreen'
import CalendarScreen from './screens/CalendarScreen'
import ChatScreen from './screens/ChatScreen'
import AmenitiesScreen from './screens/AmenitiesScreen'
import MarketScreen from './screens/MarketScreen'
import NotFoundScreen from './screens/NotFoundScreen'
import { NavBar } from './components'
import * as Colors from './constants/colors'
import * as Api from './api'
import './styles/index.css'

const ScreenContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    background-color: ${Colors.White};
`

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route
                path="/"
                exact
                render={props => (
                    <LoginScreen {...props} />
                )}
            />
            <Route
                path="/home"
                exact
                render={props => (
                    <ScreenContainer>
                        <NavBar project={Api.projects} pages={Api.pages} active="Overview" {...props} />
                        <HomeScreen {...props} />
                    </ScreenContainer>
                )}
            />
            <Route
                path="/news"
                exact
                render={props => (
                    <ScreenContainer>
                        <NavBar project={Api.projects} pages={Api.pages} active="News" {...props} />
                        <NewsScreen {...props} />
                    </ScreenContainer>
                )}
            />
            <Route
                path="/calendar"
                exact
                render={props => (
                    <ScreenContainer>
                        <NavBar project={Api.projects} pages={Api.pages} active="Calendar" {...props} />
                        <CalendarScreen {...props} />
                    </ScreenContainer>
                )}
            />
            <Route
                path="/chat"
                exact
                render={props => (
                    <ScreenContainer>
                        <NavBar project={Api.projects} pages={Api.pages} active="Chat" {...props} />
                        <ChatScreen {...props} />
                    </ScreenContainer>
                )}
            />
            <Route
                path="/amenities"
                exact
                render={props => (
                    <ScreenContainer>
                        <NavBar project={Api.projects} pages={Api.pages} active="Amenities" {...props} />
                        <AmenitiesScreen {...props} />
                    </ScreenContainer>
                )}
            />
            <Route
                path="/marketplace"
                exact
                render={props => (
                    <ScreenContainer>
                        <NavBar project={Api.projects} pages={Api.pages} active="Marketplace" {...props} />
                        <MarketScreen {...props} />
                    </ScreenContainer>
                )}
            />
            <Route path='*' component={NotFoundScreen} />
        </Switch>
    </BrowserRouter>
, document.getElementById('root'))
