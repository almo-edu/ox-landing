import { Box } from "materials"
import styled from "styled-components"
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'

const Wrapper = styled.section`
    background-color: #DDFAF5;
    height: 190px;
    padding: 30px 22px;
    
    & > div {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 16px;
        height: 100%;
    }

    .text {
        padding-top: 4px;
    }
    .highlight {
        background-color: #ffcc8e;
        border-radius: 3px;
        padding: 4px 1px 1px 1px;
    }
`

const LeftQuote = styled(RiDoubleQuotesL)`
    position: absolute;
    top: 0;
    left: 0;
`
const RightQuote = styled(RiDoubleQuotesR)`
    position: absolute;
    bottom: 0;
    right: 0;
`


export function Comments (){
    return (
        <Wrapper >
            <div>
                <LeftQuote size={36} color="#4E4E4E" />
                <RightQuote size={36} color="#4E4E4E" />
                <Box justifyContent="center">
                    <span className="text">문제집을 풀어도&nbsp;</span>
                    <span className="highlight">성적은 그대로</span>
                    <span className="text">라면,</span>
                </Box>
                <Box justifyContent="center" marginTop={15}>
                    <span className="highlight">문제 분석</span>
                    <span className="text">이 어렵다면,</span>
                </Box>
                <Box justifyContent="center" marginTop={15}>
                    <span className="highlight">자투리 시간</span>
                    <span className="text">을 제대로 활용하고 싶다면,</span>
                </Box>
            </div>
        </Wrapper>
    )
}
