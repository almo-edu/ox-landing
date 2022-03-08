import { Box, Text } from "materials";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 32px;
    height: 115px;
    background: #323232;
    color: #f9f9f9 !important;

    .light {
        font-weight: 100;
    }
`

export const Gifts = () => {
    return (
        <Wrapper>
            <Text content="🔔" size={30} />
            <Box flexDirection="column" flex={1} marginLeft={28}>
                <Text bold content="4월 출시되는 '오늘의 선지'" size={16} />
                <Text content="누구보다 빠르게 출시 알림 받자!" size={16} marginTop={12}/>
            </Box>
        </Wrapper>
    )
}