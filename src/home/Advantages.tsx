import { Box, Text } from "materials"
import styled from "styled-components"
import adv1 from "assets/adv1.png"
import adv2 from "assets/adv2.png"
import { Button } from "antd"
import { useNavigate } from "react-router-dom"


const Wrapper = styled.section`
    background-color: #F5F5F5;
    height: 990px;
    display: flex;
    flex-direction: column;

    img {
        width: 30%;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 6px;
    }

    button {
        width: 60%;
        height: 50px;
        font-size: 18px;
        border-radius: 8px;
    }
`

export function Advantages(){
    const navigate = useNavigate()
    const toQuiz = () => navigate('/quiz/HIS')
    
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
                        <img src={"https://user-images.githubusercontent.com/30591542/154877612-a432dd7d-c590-4310-9f50-6b2d8bb4a037.png"} />
                        <span style={{padding: 12}} />
                        <img src="https://user-images.githubusercontent.com/30591542/154877161-df6b0e6e-d82b-4eb4-a441-ef44948790e8.png" />
                    </Box>
                </Box>

            </Box>
            
            <Box flexDirection="column" alignItems="center" paddingTop={24} paddingBottom={48}>
                <Button type="primary" onClick={toQuiz} >
                    O/X 문제 풀어보기
                </Button>
                <Text type="D1" content="· 작년 한국사 기출을 O/X로 풀어볼 수 있어요." marginTop={12} />
            </Box>

        </Wrapper>
    )
}