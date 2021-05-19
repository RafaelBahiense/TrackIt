import styled from "styled-components";

export default function Header () {
    return (
        <HeaderWrapper>
            <h1>TrackIt</h1>
            <img src={"http://s2.glbimg.com/4Ek8CnZSuYyyvaNQEPPiX_d-faA=/e.glbimg.com/og/ed/f/original/2017/11/24/gali1.jpg"}
                 alt={"Foto de perfil"}
            />
        </HeaderWrapper>
    );
}

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 18px;
    position: fixed;
    top: 0px;
    height: 70px;
    width: 100%;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    h1 {
        font-family: Playball;
        font-size: 39px;
        color: #FFFFFF;
    }

    img {
        width: 51px;
        height: 51px;
        border-radius: 30px;
    }

`;