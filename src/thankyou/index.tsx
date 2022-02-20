import { Button } from "antd";
import { Box, Text } from "materials";
import { useNavigate } from "react-router-dom";

export function Thankyou(){
    const nav = useNavigate()
    const goHome = () => nav('/')
    return (
        <Box 
            flexDirection="column" 
            flex={1} 
            style={{height: '85vh'}} 
            alignItems="center" 
            justifyContent="center"
        >
            <Text type="P1" bold content="참여해 주셔서 감사합니다." marginBottom={12}/>
            <Box alignItems="center" marginBottom={12}>
                <Text type="D1" content="4월에 만나요~ 제발~~ " />
                <Text type="P1" content="🥺" />
            </Box>
            <Button type="primary" onClick={goHome} style={{width: 160}}>
                홈으로
            </Button>
            <div style={{marginTop: 24}}>
                <Text bold content="Contact" />
                <Text content="whynotedu.official@gmail.com" marginLeft={12} />
            </div>
        </Box>        
    )
}