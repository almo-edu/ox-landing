import styled from "styled-components"
import { Box, Text } from "materials";
import { Button, Popover } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { MAIN_COLOR } from "style/constants";

export const HEADER_HEIGHT = "54px";

const HeaderContainer = styled.header`
    width: 100vw;
    position: fixed;
    top: 0;
    background-color: #fff;
    box-shadow: 0 1px 0 0 rgb(0, 0, 0, 0.1);
    z-index: 100;
    
    & > div {
        padding: 0 16px;
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
    const toHome = () => navigate('/')
    const toRegister = () => navigate('/register')
    const toQuiz = () => navigate('quiz/HIS')

    return (
        <HeaderContainer>
            <Box>
                <Text type="H2" content="오늘의 선지" onClick={toHome} />

                <Box>
                    {location.pathname === "/" && (
                        <Button 
                            onClick={toQuiz}
                            type="primary" 
                            color={MAIN_COLOR} 
                        > 
                            문제 풀어보기
                        </Button>
                    )}
                    <span style={{padding:4}} />
                    {location.pathname!=="/register" && (
                        <Popover placement="bottomRight" content={
                            <Box flexDirection="column" alignItems="center">
                                <span>오늘의 선지 사전예약하고,</span>
                                <span 
                                    style={{
                                        backgroundColor: "#ffcc8e", 
                                        paddingLeft: 3, 
                                        paddingRight: 3,
                                        borderRadius: 3,
                                        fontWeight: 600
                                    }}>
                                    🍗BBQ 🍧베라 기프티콘 받자!
                                </span>
                            </Box>
                        } trigger="focus">
                            <Button 
                                autoFocus
                                onClick={toRegister}
                                type="ghost" 
                            > 
                                더 알아보기
                            </Button>
                      </Popover>
                    )}
                </Box>
            </Box>
        </HeaderContainer>
    )
}