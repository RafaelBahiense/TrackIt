import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Header from "./components/shared/Header";
import Menu from "./components/shared/Menu";
import Habits from "./components/Habits/Habits";
import Today from "./components/Today/Today";
import History from "./components/History/History";

import UserContext from "./context/UserContext";

import ResetCSS from "./styles/ResetCSS";
import GlobalCSS from "./styles/GlobalCSS";

export default function App () {
    const [userInfos, setUserInfos] = React.useState({});
    const [habitsGoal, setHabitsGoal] = React.useState(0);

    return (
        <UserContext.Provider value={{userInfos, setUserInfos, habitsGoal, setHabitsGoal}}>
            <AppWrapper>
                <ResetCSS/>
                <GlobalCSS/>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact={true}>
                            <Login/>
                        </Route>
                        <Route path="/cadastro" exact={true}>
                            <Register/>
                        </Route>
                        <Route path="/habitos" exact={true}>
                            <Header/>
                            <Habits/>
                            <Menu/>
                        </Route>
                        <Route path="/hoje" exact={true}>
                            <Header/>
                            <Today/>
                            <Menu/>
                        </Route>
                        <Route path="/historico" exact={true}>
                            <Header/>
                            <History/>
                            <Menu/>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </AppWrapper>
        </UserContext.Provider>
    );
}

const AppWrapper = styled.div`
    margin: 0 auto;
    min-width: 375px;
    min-height: 667px;
    background: #E5E5E5;
    font-family: 'Lexend Deca', sans-serif;
`;