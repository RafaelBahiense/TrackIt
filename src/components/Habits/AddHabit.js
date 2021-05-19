import React from "react";
import styled from "styled-components";

import Weekday from "./Weekday";

export default function AddHabits (props) {
    const [habit, setHabit] = React.useState({});
    const weekdays = ["D","S","T","Q","Q","S","S"];

    return (
        <AddHabitsWrapper>
            <input placeholder={"nome do hábito"}
                   value={ habit.name } 
                   onChange={ (e) => { habit.name = e.target.value; setHabit({...habit}) } }
                   disabled={habit.disabled ? "disabled" : ""}        
            />
            <Weekdays>
                {weekdays.map((day, index) => <Weekday key={index} day={day} dayNum={index + 1}/>)}
            </Weekdays>
            <SaveHabit>
                <button onClick={() => props.setAddHabit(false)}>Cancelar</button>
                <button>Salvar</button>
            </SaveHabit>
        </AddHabitsWrapper>
    );
}

const AddHabitsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 22px;
    padding: 18px;
    width: 340px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;

    input {
        width: 303px;
        height: 45px;
        margin-top: 6px;
        border-radius: 5px;
        border: 1px solid #D5D5D5;
        padding: 11px;
        font-size: 20px;

        &::placeholder {
            color: #DBDBDB;
        }

        &:disabled {
            background: #F2F2F2;
        }
        
    }

`;

const Weekdays = styled.ul`
    display: flex;
    margin-top: 8px;
`;


const SaveHabit = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-top: 25px;
    
    button {
        width: 84px;
        height: 35px;
        font-size: 16px;
        border: none;
    }

    button:first-child {
        color: #52B6FF;
        background: #FFFFFF;
    }

    button:last-child {
        color: #FFFFFF;
        background: #52B6FF;
        border-radius: 5px;
    }

`;