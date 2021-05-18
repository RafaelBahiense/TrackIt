import React from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Loader from "react-loader-spinner";

import Logo from "../../images/Logo.png";
import AuthWrapper from "./AuthWrapper";

export default function Login () {
    const [loginInfos, setLoginInfos] = React.useState({});
    const [loaderStatus, setLoaderStatus] = React.useState({button : "Entrar", disabled : false, error : ""});
    const history = useHistory();

    function logIn () {
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", loginInfos);
        loaderStatus.button =(<Loader type="ThreeDots" color="#FFFFFF" height={13} width={51} />);
        loaderStatus.disabled = true;
        setLoaderStatus({...loaderStatus});
        promise.then(response => {
            history.push("/habitos", response.data);
        }).catch(() => {
            loaderStatus.button = "Entrar";
            loaderStatus.disabled = false;
            loaderStatus.error = "Ocorreu um erro, tente novamente!";
            setLoaderStatus({...loaderStatus});
        });
    }

    return (
        <AuthWrapper disabled={loaderStatus.disabled}>
            <img src={Logo} alt={"Logo"}></img>
            <span>{loaderStatus.error}</span>
            <input placeholder={"email"}
                   value={ loginInfos.email } 
                   onChange={ (e) => { loginInfos.email = e.target.value; setLoginInfos({...loginInfos}) } }
                   disabled={loaderStatus.disabled ? "disabled" : ""}
            />
            <input placeholder={"senha"}
                   type={"password"}
                   value={ loginInfos.password }
                   onChange={ (e) => { loginInfos.password = e.target.value; setLoginInfos({...loginInfos}) } }
                   disabled={loaderStatus.disabled ? "disabled" : ""}
            />
            <button onClick={logIn}>{loaderStatus.button}</button>
            <Link to={"/cadastro"}>
                <p>Não tem uma conta? Cadastre-se!</p>            
            </Link>
        </AuthWrapper>
    );
}