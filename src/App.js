import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Login from "./components/Login";

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

                </Switch>
            </BrowserRouter>
        </AppWrapper>
    );
}

const AppWrapper = styled.div`
    margin: 0 auto;
    width: 375px;
    height: 667px;
    background: #FFFFFF;
    font-family: 'Lexend Deca', sans-serif;
`;