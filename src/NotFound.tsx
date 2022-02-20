import { Button } from "antd";
import { Box, Text } from "materials";
import { useNavigate } from "react-router-dom";

export function NotFound(){
    const nav = useNavigate()
    const goHome = () => nav('/')
    return (
        <Box 
            flexDirection="column" 
            flex={1} 
            style={{height: '80vh'}} 
            alignItems="center" 
            justifyContent="center"
        >
            <Text type="H1" size={40} content='404' />
            <Text type="H1" content='NOT FOUND' marginTop={6} />
            <Text type="D1" content="요청하신 페이지를 찾을 수 없습니다." marginTop={6} marginBottom={18}/>
            <Button type="primary" onClick={goHome}>
                홈으로
            </Button>
        </Box>        
    )
}