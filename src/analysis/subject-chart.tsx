import { responseState } from "atoms/response.atom"
import { subjects_list } from "data/subjects-list.data"
import { Box, Text } from "materials"
import { useMemo } from "react"
import { useRecoilValue } from "recoil"
import { HorizontalChart } from "./horizontal-chart"


interface SubjectDataProps {
    name: string
    response: number
}
export const SubjectChart = () => {
    const responses = useRecoilValue(responseState)
    const initialData:SubjectDataProps[] = subjects_list.map((name) => ({name, response: 0}))
    const data = useMemo(() => {
        const data = responses.reduce((acc, res) => {
            res.subjects.forEach(subject => {
                const index = acc.findIndex(d => d.name===subject)
                acc[index].response++
            })
            return acc;
        }, initialData)
        const data_nospace = data.map(({name, response}) => ({name:name.split(' ').join(''), response}))
        return data_nospace;
    },[responses])
    const social = useMemo(() => data.slice(1,10).reduce((a, b) => a+b.response, 0), [data])
    const science = useMemo(() => data.slice(11).reduce((a, b) => a+b.response, 0), [data])
        
    return (
        <>
        <HorizontalChart 
            data={data}
            xKey="name"
            yKey="response"
        />
        <Box marginTop={10}>
            <Text type="P1" content={`사회탐구: ${social}`} />
            <Text type="P1" content={`과학탐구: ${science}`} marginLeft={10} />
        </Box>
        </>
    )
}