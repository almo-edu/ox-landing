import styled from "styled-components"
import { Box, Text } from "materials";
import { Button } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

export const HEADER_HEIGHT = "54px";

const HeaderContainer = styled.header`
    width: 100vw;
    position: fixed;
    top: 0;
    background-color: #fff;
    box-shadow: 0 1px 0 0 rgb(0, 0, 0, 0.1);
    z-index: 100;
    
    & > div {
        padding: 0 20px;
        height: ${HEADER_HEIGHT};
        justify-content: space-between;
        align-items: center;
        max-width: 1024px;
        margin: auto;
    }
`

export function Header(){
    const navigate = useNavigate()
    const location = useLocation()
    const isRegistering = location.pathname === '/register'
    console.log(location.pathname)
    console.log(isRegistering)

    const onClickLink = () => navigate(isRegistering ? '' : '/register')

    return (
        <HeaderContainer>
            <Box>
                <Text type="H2" content="오늘의 선지" />

                <Button 
                    onClick={onClickLink}
                    type="link" 
                    color="primary" 
                    style={{padding: 0}} 
                >
                    {isRegistering ? "홈으로" : "사전등록하기"}
                </Button>
            </Box>
        </HeaderContainer>
    )
}