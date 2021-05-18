import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Habits from "./components/Habits/Habits";

import ResetCSS from "./styles/ResetCSS";
import GlobalCSS from "./styles/GlobalCSS";

export default function App () {
    return (
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
                        <Habits/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </AppWrapper>
    );
}

const AppWrapper = styled.div`
    margin: 0 auto;
    min-width: 375px;
    min-height: 667px;
    background: #FFFFFF;
    font-family: 'Lexend Deca', sans-serif;
`;