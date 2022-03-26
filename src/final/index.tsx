import { Button } from "antd"
import { solvedState, useSolvedProblemInfo } from "atoms/solved.atom"
import { Box, Text } from "materials"
import { useNavigate } from "react-router-dom"
import { useResetRecoilState } from "recoil"
import styled from "styled-components"

const Wrapper = styled.div`
    height: 80vh;
    display: flex;

    & > div {
        margin: auto;
    }

    button {
        margin-top: 24px;
        border-radius: 8px;
        width: 60%;
        height: 50px;
        font-size: 20px;
    }
`

interface FinalProps {
    code: string
}
export function Final({code}:FinalProps){
    const {getScore} = useSolvedProblemInfo(code)
    const result = getScore()
    const resetSolved = useResetRecoilState(solvedState)
    const navigate = useNavigate()
    const onMore = () => {
        navigate('/register')
        resetSolved()
    }
    
    return (
        <Wrapper>
            <Box flex={1} flexDirection="column" alignItems="center">
                <Text
                    bold
                    color="#666"
                    align="center"
                    size={36} 
                    content="SCORE" 
                />
                <Text
                    bold
                    align="center"
                    size={42} 
                    content={`${result.ok} / ${result.total}`}
                    marginTop={16}
                />
                <Text
                    type="P1"
                    align="center"
                    content="COX와 함께"
                    marginTop={24}
                />
                <Text
                    type="P1"
                    align="center"
                    content="수능 정복해 볼까요?"
                    marginTop={6}
                />
                <Button type="primary" onClick={onMore}>
                    더 알아보기
                </Button>
            </Box>
        </Wrapper>        
    )
}