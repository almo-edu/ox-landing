import { Text } from "materials";
import styled from "styled-components";

const Wrapper = styled.div`
    background-color: #636365;
    height: 64px;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 10px;
`
export function Contact(){
    return (
        <Wrapper>
            <Text content="궁금하신 사항은 아래 메일로 문의주세요." marginBottom={8} />
            <div>
                <Text bold content="Contact" />
                <Text content="whynotedu.official@gmail.com" marginLeft={12} />
            </div>
        </Wrapper>
    )
}