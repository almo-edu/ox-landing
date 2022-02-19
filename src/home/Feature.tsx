import { Box, Text } from "materials"
import styled from "styled-components"
import feature_img from "assets/feature1.png"

const Wrapper = styled.section`
    background-color: #DDFAF5;
    height: 80vh;
    display: flex;
    flex-direction: column;

    img {
        width: 60%;
        border-top-left-radius: 24px;
        border-top-right-radius: 24px;
        box-shadow: rgba(0, 0, 0, 0.12) 6px -10px 12px;
    }
`

export function Feature(){
    return (
        <Wrapper >
            <Box flex={1} flexDirection="column" alignItems="center" justifyContent="center" >
                <Text bold size={40} content="오늘의 선지" />
                <Text size={16} content="수험생을 위한 최고의 기출 학습," marginTop={21} />
                <Text size={16} content="O/X로 수능 정복하자!" marginTop={10} />
            </Box>
            <Box flex={2} justifyContent="center" >
                <img src={feature_img} />
            </Box>
        </Wrapper>
    )
}