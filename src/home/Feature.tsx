import { Text } from "materials"
import styled from "styled-components"
import feature_img from "assets/feature1.png"

const Wrapper = styled.section`
    position: relative;
    background-color: #DDFAF5;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 24px;

    img {
        width: 60vw;
        position: absolute;
        bottom: 0;
        border-top-left-radius: 24px;
        border-top-right-radius: 24px;
        box-shadow: rgba(0, 0, 0, 0.12) 2px -10px 12px;
    }
`

export function Feature(){
    return (
        <Wrapper >
            <Text bold size={42} content="오늘의 선지" marginTop={48} />
            <Text size={16} content="수험생을 위한 최고의 기출 학습," marginTop={24} />
            <Text size={16} content="O/X로 수능 정복하자!" marginTop={10} />

            <img src={feature_img} />
        </Wrapper>
    )
}