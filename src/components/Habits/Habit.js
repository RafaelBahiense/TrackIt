import { useContext }  from "react";
import axios from "axios";
import styled from "styled-components";
import { TrashOutline } from 'react-ionicons'

import UserContext from "../../context/UserContext";

export default function Habit (props) {
    const weekdays = ["D","S","T","Q","Q","S","S"];
    const {userInfos} = useContext(UserContext)

    function deleteHabit () {
        const config = {
            headers: {
                "Authorization": `Bearer ${userInfos.token}`
            }
        }
        axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.id}`, config);

        props.setRefresh({...props.refresh});
    }


    return (
        <HabitWrapper>
            <span>{props.name}</span>
            <TrashOutlineWrapper onClick={deleteHabit}>
                <TrashOutline color={'#666666'} 
                            height="15px"
                            width="13px"
                />
            </TrashOutlineWrapper>
            <Weekdays>
                {weekdays.map((day, index) => 
                    <Weekday key={index} 
                            isSelected={props.days.includes(index)}>
                                {day}
                    </Weekday>)
                }
            </Weekdays>
        </HabitWrapper>
    );
}

const HabitWrapper = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 10px;
    padding: 15px;
    width: 340px;
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;

`;

const Weekdays = styled.ul`
    display: flex;
    margin-top: 8px;
`;

const Weekday = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    margin-right: 4px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    font-size: 20px;
    color: ${props => props.isSelected ? "#FFFFFF" : "#DBDBDB"};
    background: ${props => props.isSelected ? "#CFCFCF" : "#FFFFFF"};
`;

const TrashOutlineWrapper = styled.div`
    position: relative;
    width: 13px;
    height: 15px;
    top: -20px;
    left: 300px;
`;