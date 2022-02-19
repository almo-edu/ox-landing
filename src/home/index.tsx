import { Button } from "antd"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const Wrapper = styled.div`
    padding-top: 24px;
`
export function Home(){
    const navigate = useNavigate()
    const toHistory = () => navigate('HIS/1')
    return (
        <Wrapper>
            <Button onClick={toHistory}>
                한국사 예시 페이지
            </Button>
        </Wrapper>
    )
}