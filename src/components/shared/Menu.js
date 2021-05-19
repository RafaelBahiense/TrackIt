import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Menu () {
    return (
        <MenuWrapper>
            <span>Hábitos</span>
            <div>
                <CircularProgressbarWrapper>
                    <CircularProgressbar 
                    value={70}
                    text={"Hoje"}
                    styles={buildStyles({
                        textColor: "#fff",
                        textSize: '24px',
                        pathColor: "#fff",
                        trailColor: `rgba(0,0,0,0.0)`
                    })} />
                </CircularProgressbarWrapper>
            </div>
            <span>Histórico</span>
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