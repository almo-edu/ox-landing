import { Box, Text } from "materials";
import styled from "styled-components";
import adv1 from "assets/adv1.png"
import { MAIN_COLOR } from "style/constants";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.section`
    background-color: #F5F5F5;
    height: 300px;
    padding: 28px;

    display: flex;
    justify-content: space-between;

    img {
        width: 115px;
        border-radius: 12px;
        box-shadow: rgba(0, 0, 0, 0.12) 2px 4px 6px;
    }

    button {
        width: 160px;
        height: 36px;
        border-radius: 8px;
    }
`

export function ComingSoon(){
    const navigate = useNavigate()
    const toRegister = () => navigate('/register')

    return (
        <Wrapper>
            <Box flexDirection="column" justifyContent="center">
                <Text size={20} content="Coming Soon" color={MAIN_COLOR} />
                <Text size={24} content="오늘의 선지" marginTop={12} />
                <Text type="D1" content="4월 iOS,Android 앱 출시 예정" marginTop={8} marginBottom={18} />
                

                <Button type="primary" onClick={toRegister}>
                    💌 출시 알림 받기
                </Button>

                <Text size={11} content="✔총 18개 탐구 과목 평가원/교육청 기출" marginTop={18} />
                <Text type="D2" size={9} content="*응시생 많은 과목부터 순차 출시" marginTop={4} />
            </Box>

            <img src={adv1} />
        </Wrapper>
    )
}