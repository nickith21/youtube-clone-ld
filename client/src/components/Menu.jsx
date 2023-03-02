import react from "react";
import styled from "styled-components";
import LogoImg from "../img/birds.png";

const Container = styled.div`
    flex: 1;
    background-color: #202020;
    height: 100vh;
    color: white;
`;

const Wrapper = styled.div`
    padding: 18px 26px;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

const Img = styled.img`
    height: 25px;
`;

const Menu = () => {
    return (
        <Container>
            <Wrapper>
                <Logo> 
                    <Img src={LogoImg} />
                    BirdTube
                </Logo>
            </Wrapper>
        </Container>
    );
};

export default Menu;
