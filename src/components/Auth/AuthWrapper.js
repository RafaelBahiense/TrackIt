import styled from "styled-components";

const AuthWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    width: 375px;
    min-height: 667px;
    padding: 68px 36px;
    background: #FFFFFF;

    img {
        width: 180px;
        height: 178px;
        margin-left: calc(50% - 90px);
        margin-bottom: 26px;
    }

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

    button {
        width: 303px;
        height: 45px;
        margin-top: 6px;
        border-radius: 5px;
        border: none;
        background: #52B6FF;
        opacity: ${props => props.disabled ? 0.7 : 1};
        text-align: center;
        font-size: 21px;
        color: #FFFFFF;
    }

    p {
        margin-top: 25px;
        font-size: 14px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
    }

    span {
        font-size: 14px;
        text-align: center;
        color: red;
    }

`;

export default AuthWrapper;