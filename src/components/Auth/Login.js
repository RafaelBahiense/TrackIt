import React, { useContext } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Loader from "react-loader-spinner";

import Logo from "../../images/Logo.png";
import AuthWrapper from "./AuthWrapper";
import UserContext from "../../context/UserContext";

export default function Login () {
    const [loaderStatus, setLoaderStatus] = React.useState({button : "Entrar", disabled : false, error : ""});
    const [email, setEmail] = React.useState("");
    const [password, setPassword] =  React.useState("");
    const {setUserInfos} = useContext(UserContext);

    const history = useHistory();

    function logIn (event) {
        event.preventDefault();

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", {email, password});
        
        loaderStatus.button =(<Loader type="ThreeDots" color="#FFFFFF" height={13} width={51} />);
        loaderStatus.disabled = true;
        setLoaderStatus({...loaderStatus});
        
        promise.then(response => {

            setUserInfos(response.data);
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
            <form onSubmit={logIn}>
                <span>{loaderStatus.error}</span>
                <input placeholder={"email"}
                    type={"email"}
                    value={ email } 
                    onChange={ (e) =>  setEmail(e.target.value) }
                    required
                    disabled={loaderStatus.disabled ? "disabled" : ""}
                />
                <input placeholder={"senha"}
                    type={"password"}
                    value={ password }
                    onChange={ (e) => setPassword(e.target.value) }
                    required
                    disabled={loaderStatus.disabled ? "disabled" : ""}
                />
                <button type={"submit"}>{loaderStatus.button}</button>
            </form>
            <Link to={"/cadastro"}>
                <p>Não tem uma conta? Cadastre-se!</p>            
            </Link>
        </AuthWrapper>
    );
}