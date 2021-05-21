import { useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import UserContext from "../../context/UserContext";

export default function Menu () {
    const {userInfos} = useContext(UserContext);
    const {habitsGoal, setHabitsGoal} = useContext(UserContext);

    useEffect(() => {
    
        const config = {
            headers: {
                "Authorization": `Bearer ${userInfos.token}`
            }
        }
    
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
    
        promise.then((response) => {
            setHabitsGoal((response.data.filter((habit) => habit.done === true).length / response.data.length).toFixed(2));
        }).catch((response) => {
            console.log(response);
        })
    },[])
    

    return (
        <MenuWrapper>
            <Link to={"/habitos"}>
                <span>Hábitos</span>
            </Link>
            <div>
                <Link to={"/hoje"}>
                    <CircularProgressbarWrapper>
                        <CircularProgressbar 
                        value={habitsGoal*100}
                        text={"Hoje"}
                        styles={buildStyles({
                            textColor: "#fff",
                            textSize: '24px',
                            pathColor: "#fff",
                            trailColor: `rgba(0,0,0,0.0)`
                        })} />
                    </CircularProgressbarWrapper>
                </Link>
            </div>
            <Link to={"/historico"}>
                <span>Histórico</span>
            </Link>
        </MenuWrapper>
    );
}

const MenuWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    padding: 0px 32px;
    bottom: 0px;
    height: 70px;
    width: 100%;
    background: #FFFFFF;

    span {
        font-size: 18px;
        color: #52B6FF;
    }

    & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        bottom: 25px;
        left: calc(50% - 45px);
        width: 91px;
        height: 91px;
        background: #52B6FF;
        border-radius: 45px;
    }

`;

const CircularProgressbarWrapper = styled.div`
    width: 80px;
    height: 80px;
`;