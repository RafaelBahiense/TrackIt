import React, { useEffect, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

import Habit from "./Habit";

import UserContext from "../../context/UserContext";

export default function Today () {
    const [habits, setHabits] = React.useState([]);
    const {userInfos, habitsGoal} = useContext(UserContext);

    const now = dayjs().locale('pt-br');

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${userInfos.token}`
            }
        }

        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)

        promise.then((response) => {
            setHabits(response.data);
        }).catch((response) => {
            console.log(response);
        })
    },[])

    return (
        <TodayWrapper>
            <span>
                <DayText>{now.format('dddd, DD/MM')}</DayText>
                <HabitsGoal habitsGoal={habitsGoal}>{habitsGoal > 0 ? `${habitsGoal*100}% dos hábitos concluídos` : `Nenhum hábito concluído ainda`}</HabitsGoal>
            </span>
            {habits.length > 0 
            ? <ul>{habits.map((habit, index) => <Habit key={index} {...habit}/>)}</ul> 
            : <p>Você não tem nenhum hábito cadastrado no dia de hoje!</p>}
        </TodayWrapper>
    );
}

const TodayWrapper = styled.div`
    width: 375;
    min-height: 667px;
    margin-top: 70px;
    padding: 28px 18px 0px 18px;

    span {
        height: 45px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    & > p {
        margin-top: 20px;
    }

`;

const DayText = styled.p`
    font-size: 23px;
    color: #126BA5;
`;

const HabitsGoal = styled.p`
    font-size: 18px;
    color: ${props => props.habitsGoal > 0 ? "#8FC549" : "#BABABA"};
`;