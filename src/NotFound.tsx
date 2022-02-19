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
            <Text type="H1" content='NOT FOUND "404"' />
            <Text type="P1" content="페이지를 찾지 못했습니다." marginVertical={6}/>
            <Button type="primary" onClick={goHome}>
                홈으로
            </Button>
        </Box>        
    )
}