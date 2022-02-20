import { Box, Text } from "materials"
import { MAIN_COLOR } from "style/constants"
import styled from "styled-components"

const Wrapper = styled.div`
    width: 100%;
    aspect-ratio: 1.676;
    background-image: url("https://user-images.githubusercontent.com/30591542/154845083-40b760ce-c455-407e-8567-59b3f35dfe83.png");
    background-size: cover;
    display: flex;
    padding: 22px;

    .highlight {
        background-color: #ffcc8e;
        border-radius: 3px;
        padding: 4px 4px 1px 0.5px;
        font-weight: 700;
    }
`
export const Event = () => {
    return (
        <Wrapper>
            <Box flexDirection="column" justifyContent="center">
                <Text bold content={"Coming Soon"} color={MAIN_COLOR} size={22} marginTop={10} />
                <Text bold content={"오늘의 선지"} size={24} marginTop={20} />
                <Text content={"사전 예약 이벤트"} size={20} marginTop={8} />
                <Text type="D2" content={"4월 출시되는 '오늘의 선지' 사전 예약하고"} marginTop={20} />
                <Box>
                    <Text className="highlight" size={11} content={"🍗BBQ 🍧베라 기프티콘 받자!"}  />
                </Box>

            </Box>
        </Wrapper>
    )
}