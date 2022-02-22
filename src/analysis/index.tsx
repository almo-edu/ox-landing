import { Divider } from "antd"
import { get_response_api } from "api/get-responses"
import { responseState } from "atoms/response.atom"
import dayjs from "dayjs"
import { Box, Text } from "materials"
import { useEffect } from "react"
import { useRecoilState, useSetRecoilState } from "recoil"
import styled from "styled-components"
import { GradeChart } from "./grade-chart"
import { SubjectChart } from "./subject-chart"

const Wrapper = styled.div`
    width: 100%;
    padding: 22px;
    min-height: 100vh;
    .chart {
        width: 100%;
        margin: auto;
        margin-top: 16px;
    }
`
export const Analysis = () => {
    const [responses, setResponses] = useRecoilState(responseState)
    useEffect(() => {
        get_response_api().then(setResponses)
    },[])
    return (
        <Wrapper>
            <Text type="P1" bold align="center" content={`과목별 응답 (총 ${responses.length}개 응답)`} />
            <div className="chart">
                <SubjectChart />
            </div>
            <Divider />


            <Text type="P1" bold align="center" content={`성적 분포`} />
            <div className="chart">
                <GradeChart />
            </div>
            <Divider />


            <Text type="P1" bold align="center" content="응답" />
            <Box flexDirection="column">
                {responses.map(({tel, createdAt}) => {
                    return (
                        <Box marginTop={4} justifyContent="space-between">
                            <Text type="P2" content={tel} />
                            <Text type="P2" content={createdAt ? dayjs(createdAt).format("MM/DD HH:mm:ss") : ""} />
                        </Box>
                    )
                })}
            </Box>

        </Wrapper>
    )
}