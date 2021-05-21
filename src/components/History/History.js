import styled from "styled-components";

export default function History () {
    return (
        <HistoryWrapper>
            <span>Meus hábitos</span>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </HistoryWrapper>
    );
}

const HistoryWrapper = styled.div`
    margin: 70px 0px;
    padding: 22px 18px 0px 18px;

    span {
        font-size: 23px;
        color: #126BA5;
    }

    p {
        margin-top: 29px;
        font-size: 18px;
        color: #666666; 
    }
`;