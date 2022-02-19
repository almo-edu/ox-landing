import styled from "styled-components"
import { Box, Text } from "materials";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

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
    const toHome = () => navigate('/')
    const toRegister = () => navigate('/register')

    return (
        <HeaderContainer>
            <Box>
                <Text type="H2" content="오늘의 선지" onClick={toHome} />

                <Button 
                    onClick={toRegister}
                    type="link" 
                    color="primary" 
                    style={{padding: 0}} 
                > 
                    사전등록하기
                </Button>
            </Box>
        </HeaderContainer>
    )
}