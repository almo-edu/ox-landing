import { Box, Text } from "materials"
import styled from "styled-components"
import adv1 from "assets/adv1.png"
import adv2 from "assets/adv2.png"


const Wrapper = styled.section`
    background-color: #F5F5F5;
    height: 90vh;
    display: flex;
    flex-direction: column;

    img {
        width: 30vw;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 6px;
    }
`

export function Advantages(){
    return (
        <Wrapper>
            <Box 
                flex={1} 
                alignItems="center"
                justifyContent="center"
            >
                <Box flexDirection="column" flex={1} >
                    <Text 
                        bold
                        align="center"
                        size={16}
                        content="기출 문제를 O/X로 간단하게 학습해요" 
                        marginBottom={20}
                    />
                    <Box justifyContent="center">
                        <img src={adv1} />
                        <span style={{padding: 12}} />
                        <img src={adv2} />
                    </Box>
                </Box>
            </Box>

            {/* 해설, 틀린 문제 */}
            <Box 
                flex={1} 
                alignItems="center"
                justifyContent="center"
                marginTop={-18}
            >
                <Box flexDirection="column" >
                    <Text 
                        bold
                        align="center"
                        size={16}
                        content="해설을 바로 확인하고" 
                    />
                    <Text 
                        bold
                        align="center"
                        size={16}
                        content="중요한 문제는 저장, 틀린 문제는 모아봐요" 
                        marginTop={8}
                        marginBottom={20}
                    />
                    <Box justifyContent="center">
                        <img src={adv1} />
                        <span style={{padding: 12}} />
                        <img src={adv2} />
                    </Box>
                </Box>
            </Box>

        </Wrapper>
    )
}