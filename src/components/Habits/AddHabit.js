import React, { useContext }  from "react";
import axios from "axios";
import styled from "styled-components";
import Loader from "react-loader-spinner";

import Weekday from "./Weekday";

import UserContext from "../../context/UserContext";

export default function AddHabits (props) {
    const [habit, setHabit] = React.useState({name : "", days : []});
    const [loaderStatus, setLoaderStatus] = React.useState(false);
    const weekdays = ["D","S","T","Q","Q","S","S"];

    const {userInfos} = useContext(UserContext);

    function addHabit () {
        if (habit.name === "" || habit.days.length === 0) {
            alert("Preencha seu habito!")
        }
        else {
            const config = {
                headers: {
                    "Authorization": `Bearer ${userInfos.token}`
                }
            }
            console.log(habit);
            const promise =  axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", habit, config);

            setLoaderStatus(true);

            promise.then( () => {
                props.setAddHabit(false);
                setLoaderStatus(false);
                props.setRefresh({...props.refresh})
            } ).catch( (response) => {
                    console.log(response)    
                    setLoaderStatus(false)
            });
    
        }
    }

    return (
        <AddHabitsWrapper>
            <input placeholder={"nome do hábito"}
                   value={ habit.name } 
                   onChange={ (e) => { habit.name = e.target.value; setHabit({...habit}) } }
                   disabled={habit.isDisabled ? "disabled" : ""}        
            />
            <Weekdays>
                {weekdays.map((day, index) => <Weekday key={index} day={day} dayNum={index} setHabit={setHabit} habit={habit}/>)}
            </Weekdays>
            <SaveHabit loaderStatus={loaderStatus}>
                <button onClick={() => props.setAddHabit(false)}>Cancelar</button>
                <button onClick={addHabit} >
                    {loaderStatus 
                    ? (<Loader type="ThreeDots" color="#FFFFFF" height={11} width={43} />) 
                    : "Salvar"}
                </button>
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
        opacity: ${props => props.loaderStatus ? 0.7 : 1};
        background: #52B6FF;
        border-radius: 5px;
    }

`;