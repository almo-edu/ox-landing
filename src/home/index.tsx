import { Button } from "antd"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Advantages } from "./Advantages"
import { Comments } from "./Comments"
import { Feature } from "./Feature"

const Wrapper = styled.div`

`
export function Home(){
    return (
        <Wrapper>
            <Feature />
            <Advantages />
            <Comments />
        </Wrapper>
    )
}