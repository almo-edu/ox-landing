import { Button } from "antd"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Feature } from "./Feature"

const Wrapper = styled.div`

`
export function Home(){
    return (
        <Wrapper>
            <Feature />

        </Wrapper>
    )
}