import React from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Loader from "react-loader-spinner";

import Logo from "../../images/Logo.png";
import AuthWrapper from "./AuthWrapper";

export default function Login () {
    const [registerInfos, setRegisterInfos] = React.useState({});
    const [loaderStatus, setLoaderStatus] = React.useState({button : "Cadastrar", disabled : false, error : ""});
    const history = useHistory();

    function register () {
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", registerInfos)
        loaderStatus.button =(<Loader type="ThreeDots" color="#FFFFFF" height={13} width={51} />);
        loaderStatus.disabled = true;
        setLoaderStatus({...loaderStatus});
        promise.then(() => {
            history.push("/");
        }).catch(() => {
            loaderStatus.button = "Cadastrar";
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
                   value={ registerInfos.email } 
                   onChange={ (e) => { registerInfos.email = e.target.value; setRegisterInfos({...registerInfos}) } }
                   disabled={loaderStatus.disabled ? "disabled" : ""}
            />
            <input placeholder={"senha"}
                   type={"password"}
                   value={ registerInfos.password }
                   onChange={ (e) => { registerInfos.password = e.target.value; setRegisterInfos({...registerInfos}) } }
                   disabled={loaderStatus.disabled ? "disabled" : ""}
            />
            <input placeholder={"nome"}
                   value={ registerInfos.name }
                   onChange={ (e) => { registerInfos.name = e.target.value; setRegisterInfos({...registerInfos}) } }
                   disabled={loaderStatus.disabled ? "disabled" : ""}
            />
            <input placeholder={"foto"}
                   value={ registerInfos.image }
                   onChange={ (e) => { registerInfos.image = e.target.value; setRegisterInfos({...registerInfos}) } }
                   disabled={loaderStatus.disabled ? "disabled" : ""}
            />
            <button onClick={register}>{loaderStatus.button}</button>
            <Link to={"/"}>
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </AuthWrapper>
    );
}