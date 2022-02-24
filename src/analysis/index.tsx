import { Divider, Tag } from "antd"
import { get_response_api } from "api/get-responses"
import { responseState } from "atoms/response.atom"
import { subjects_list } from "data/subjects-list.data"
import dayjs from "dayjs"
import { Box, Text } from "materials"
import { useEffect, useMemo } from "react"
import { useRecoilState } from "recoil"
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
    .flex1 {
        display: flex;
        flex: 1;
    }
    .ant-tag {
        margin: 0 3px;
    }
`


const social = subjects_list.slice(1,10)
const science = subjects_list.slice(11)

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
                {responses.map(({tel, createdAt, subjects}) => {
                    const isHis = subjects.includes("한국사")
                    const isSoc = subjects.filter(subject => social.includes(subject)).length > 0
                    const isSci = subjects.filter(subject => science.includes(subject)).length > 0
                    return (
                        <Box key={tel} marginTop={10} justifyContent="space-between" alignItems="center">
                            <Text type="P2" content={tel} />
                            <Text type="P2" content={createdAt ? dayjs(createdAt).format("MM/DD HH:mm:ss") : "-"} />
                            <Box style={{width: 130}} justifyContent="center" >
                                {isHis && <Tag color="gold" children="한국사"/> }
                                {isSoc && <Tag color="green" children="사탐"/> }
                                {isSci && <Tag color="blue" children="과탐"/> }
                            </Box>
                        </Box>
                    )
                })}
            </Box>

        </Wrapper>
    )
}