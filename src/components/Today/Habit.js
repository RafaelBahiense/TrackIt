import React, { useContext }  from "react";
import axios from "axios";
import styled from "styled-components";

import { Checkbox } from 'react-ionicons'

import UserContext from "../../context/UserContext";

export default function Habit (props) {
    const [done, setDone] =  React.useState(props.done);
    const {userInfos, habitsGoal, setHabitsGoal} = useContext(UserContext);
    const [currentSequence, setCurrentSequence] = React.useState(props.currentSequence);

    function toggleDone () {
        const config = {
            headers: {
                "Authorization": `Bearer ${userInfos.token}`
            }
        }

        if(done) {
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.id}/uncheck`,{}, config);
            promise.then((response) => {
                setCurrentSequence(currentSequence - 1);
                setDone(false);
            }
            ).catch((response) => console.log(response)
            );

            const promiseGoal = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);
            promiseGoal.then((response) => {
                setHabitsGoal((response.data.filter((habit) => habit.done === true).length / response.data.length).toFixed(2));
            }).catch((response) => {
                console.log(response);
            })

        }
        else {
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.id}/check`,{},config);
            promise.then(() => {
                setCurrentSequence(currentSequence + 1);
                setDone(true);
            }).catch((response) => console.log(response)
            );

            const promiseGoal = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);
            promiseGoal.then((response) => {
                setHabitsGoal((response.data.filter((habit) => habit.done === true).length / response.data.length).toFixed(2));
            }).catch((response) => {
                console.log(response);
            })

        }
    }

    return (
        <HabitWrapper>
                <span>
                    <HabitName>{props.name}</HabitName>
                    <div>
                        <SequenceText>
                            Sequência atual:&nbsp;
                            <SequenceTextStyle current={currentSequence} highest={0}>
                                {` ${currentSequence} dias`}
                            </SequenceTextStyle>
                        </SequenceText>
                        <SequenceText>
                            Seu recorde:&nbsp;
                            <SequenceTextStyle current={currentSequence} highest={props.highestSequence}>
                                {` ${props.highestSequence} dias`}
                            </SequenceTextStyle>
                        </SequenceText>
                    </div>
                </span>
                <Checkbox
                onClick={() => toggleDone()}
                color={done ? '#8FC549' : '#EBEBEB'} 
                height="69px"
                width="69px"
                />
        </HabitWrapper>
    );
}

const HabitWrapper = styled.li`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    padding: 13px;
    width: 340px;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    color: #666666;

    & > span:first-child {
        padding: 5px;
        height: 69px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    & > span:last-child {
        height: 69px;
        width: 69px;
    }
`;

const HabitName = styled.p`
    font-size: 20px;
`;

const SequenceTextStyle =  styled.strong`
    font-weight: normal;
    color: ${props => props.current >= props.highest && props.current > 0 ? "#8FC549" : "#666666"};
`;

const SequenceText = styled.p`
    display: flex;
    font-size: 13px;
    line-height: 15px;
`;