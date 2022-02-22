import { responseState } from "atoms/response.atom"
import { useMemo } from "react"
import { useRecoilValue } from "recoil"
import { HorizontalChart } from "./horizontal-chart"


const grades = ["1~2등급", "3~4등급", "5~6등급", "7~9등급", "모름"]
interface GradeDataProps {
    grade: string
    response: number
}
export const GradeChart = () => {
    const responses = useRecoilValue(responseState)
    const initialData:GradeDataProps[] = grades.map((grade) => ({grade, response: 0}))
    const data = useMemo(() => {
        const data = responses.reduce((acc, res) => {
            const index =acc.findIndex(d => d.grade===res.grade)
            acc[index].response++
            return acc;
        }, initialData)
        return data;
    },[responses])

        
    return (
        <HorizontalChart 
            data={data}
            xKey="grade"
            yKey="response"
        />
    )
}