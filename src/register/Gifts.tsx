import { Box, Text } from "materials";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    height: 115px;
    background: #323232;
    color: #f9f9f9 !important;

    .light {
        font-weight: 100;
    }
`

export const Gifts = () => {
    return (
        <Wrapper>
            <Text bold content="사전 예약 혜택" size={14} />
            <Box flexDirection="column" alignItems="center">
                <Text content="🔔" size={20} />
                <Text content="앱 출시 알림" size={12} marginTop={8}/>
                <Text className="light" content="4월 출시 예정" size={9} marginTop={6} />
                <Text content=" " size={9} marginTop={2} />
            </Box>
            <Box flexDirection="column" alignItems="center">
                <Text content="🎁" size={20} />
                <Text content="기프티콘 추첨" size={12} marginTop={8} />
                <Text className="light" content="BBQ 황금올리브 1명" size={9}  marginTop={6} />
                <Text className="light" content="베스킨라빈스 싱글킹 10명" size={9} marginTop={2} />
            </Box>
        </Wrapper>
    )
}