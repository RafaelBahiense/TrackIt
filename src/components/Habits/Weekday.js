import React from "react";
import styled from "styled-components";

export default function Weekday (props) {
    const [day, setDay] = React.useState({isSelected : false, day : props.dayNum})

    function toggleSelected (bool) {
        day.isSelected = bool;
        setDay({...day});
    }

    return (
        <li><WeekdayWrapper isSelected={day.isSelected}
                            onClick={() => {
                                props.habit.days.indexOf(props.dayNum) === -1 ? props.habit.days.push(props.dayNum) : props.habit.days = props.habit.days.filter(item => item !== props.dayNum );
                                props.setHabit({...props.habit})
                                day.isSelected ? toggleSelected(false) : toggleSelected(true);
                            }}
        >{props.day}</WeekdayWrapper></li>
    );
}

const WeekdayWrapper = styled.button`
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