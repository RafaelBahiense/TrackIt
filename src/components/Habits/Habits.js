import React, { useContext, useEffect }  from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import AddHabits from "./AddHabit";
import Habit from "./Habit"; 

import UserContext from "../../context/UserContext";

export default function Habits () {
    const [addHabit, setAddHabit] = React.useState(false);
    const {userInfos} = useContext(UserContext);
    const [habits, setHabits] = React.useState([]);
    const [refresh, setRefresh] = React.useState({refresh : ""});

    const history = useHistory();

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${userInfos.token}`
            }
        }
        
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);
        promise.then((response) => {
            setHabits(response.data);
        }).catch(() => {
            alert("Faça login novamente!");
            history.push("/");
        })
    }, [refresh])

    return (
        <HabitsWrapper>
            <HabitsMenu>
                <span>Meus hábitos</span>
                <button onClick={() => setAddHabit(true)}>+</button>
            </HabitsMenu>
            {addHabit ? <AddHabits setAddHabit={setAddHabit} setRefresh={setRefresh} refresh={refresh}/> : ""}
            {habits.length > 0 
            ? <ul>{habits.map((habit, index) => <Habit key={index} setRefresh={setRefresh} refresh={refresh} {...habit}/>)}</ul> 
            : <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>}
        </HabitsWrapper>
    );
}

const HabitsWrapper = styled.div`
    margin: 70px 0px;
    padding: 22px 18px 0px 18px;

    p {
        margin-top: 29px;
        font-size: 18px;
        color: #666666;
    }

`;

const HabitsMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
        font-size: 23px;
        color: #126BA5;
    }

    button {
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 5px;
        border: none;
        font-size: 27px;
        text-align: center;
        color: #FFFFFF
    }

`;