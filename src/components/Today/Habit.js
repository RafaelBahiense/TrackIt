import React, { useContext }  from "react";
import axios from "axios";
import styled from "styled-components";

import { Checkbox } from 'react-ionicons'

import UserContext from "../../context/UserContext";

export default function Habit (props) {
    const [done, setDone] =  React.useState([]);
    const {userInfos} = useContext(UserContext);

    return (
        <HabitWrapper>
                <span>
                    <HabitName>{props.name}</HabitName>
                    <div>
                        <SequenceText>{`Sequência atual: ${props.currentSequence} dias`}</SequenceText>
                        <SequenceText>{`Seu recorde: ${props.highestSequence} dias`}</SequenceText>
                    </div>
                </span>
                <Checkbox
                color={'#EBEBEB'} 
                height="69px"
                width="69px"
                />
        </HabitWrapper>
    );
}

const HabitWrapper = styled.li`
    display: flex;
    /* flex-direction: column;*/
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

const SequenceText = styled.p`
    font-size: 13px;
    line-height: 15px;
`;