import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import AddHabits from "./AddHabit";

export default function Habits () {
    const [addHabit, setAddHabit] = React.useState(false);
    const location = useLocation();
    //console.log(location);
    return (
        <HabitsWrapper>
            <HabitsMenu>
                <span>Meus hábitos</span>
                <button onClick={() => setAddHabit(true)}>+</button>
            </HabitsMenu>
            {addHabit ? <AddHabits setAddHabit={setAddHabit}/> : ""}
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        </HabitsWrapper>
    );
}

const HabitsWrapper = styled.div`
    margin: 70px 0px;
    padding: 22px 18px 0px 18px;

    p {
        margin-top: 29px;
        font-size: 17.976px;
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