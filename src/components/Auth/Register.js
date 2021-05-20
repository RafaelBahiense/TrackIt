import React from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Loader from "react-loader-spinner";

import Logo from "../../images/Logo.png";
import AuthWrapper from "./AuthWrapper";

export default function Login () {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] =  React.useState("");
    const [name, setName] = React.useState("");
    const [image, setImage] =  React.useState("");
    const [loaderStatus, setLoaderStatus] = React.useState({button : "Cadastrar", disabled : false, error : ""});
    
    const history = useHistory();

    function register (event) {
        event.preventDefault();

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", {email, password, name, image})
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
            <form onSubmit={register}>
                <span>{loaderStatus.error}</span>
                <input placeholder={"email"}
                    type={"email"}
                    value={ email } 
                    onChange={ (e) => setEmail(e.target.value) }
                    disabled={loaderStatus.disabled ? "disabled" : ""}
                />
                <input placeholder={"senha"}
                    type={"password"}
                    value={ password }
                    onChange={ (e) =>  setPassword(e.target.value) }
                    disabled={loaderStatus.disabled ? "disabled" : ""}
                />
                <input placeholder={"nome"}
                    value={ name }
                    onChange={ (e) => setName(e.target.value) }
                    disabled={loaderStatus.disabled ? "disabled" : ""}
                />
                <input placeholder={"foto"}
                    type={"url"}
                    value={ image }
                    onChange={ (e) => setImage(e.target.value) }
                    disabled={loaderStatus.disabled ? "disabled" : ""}
                />
                <button type={"submit"}>{loaderStatus.button}</button>
            </form>
            <Link to={"/"}>
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </AuthWrapper>
    );
}