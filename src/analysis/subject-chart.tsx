import { responseState } from "atoms/response.atom"
import { subjects_list } from "data/subjects-list.data"
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

        
    return (
        <HorizontalChart 
            data={data}
            xKey="name"
            yKey="response"
        />
    )
}