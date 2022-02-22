import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell } from "recharts"

const blues = [
    ["#457AA6"],
    ["#457AA6", "#E3EBF2"],
    ["#264F73", "#457AA6", "#E3EBF2"],
    ["#264F73", "#457AA6", "#A2BBD2", "#E3EBF2"],
    ["#1A334A", "#264F73", "#457AA6", "#A2BBD2", "#E3EBF2"]
  ];
const getColor = (length:number, index:number) => {
    if (length <= blues.length) {
      return blues[length - 1][index];
    }
  
    return blues[blues.length - 1][index % blues.length];
};
  
const BAR_AXIS_SPACE = 10;
const maxTextWidth = 0;


interface SubjectDataProps {
    name: string
    response: number
}

interface HorizontalChartProps<T> {
    data: Array<T>
    xKey: string
    yKey: string
}
export function HorizontalChart<T>({xKey, yKey, data}:HorizontalChartProps<T>){
        
    return (
        <ResponsiveContainer height={24 * data.length} debounce={50}>
            <BarChart 
                layout="vertical" 
                barCategoryGap={1}
                data={data}
                margin={{ left: 10, right: maxTextWidth + (BAR_AXIS_SPACE - 8) }}

            >
                <YAxis 
                    dataKey={xKey} 
                    type="category"
                    axisLine={false}
                    tickLine={false}
                    fontSize={11}
                />
                <YAxis
                    orientation="right"
                    yAxisId={1}
                    dataKey={yKey}
                    type="category"
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={value => value.toLocaleString()}
                    mirror
                    tick={{
                        transform: `translate(${BAR_AXIS_SPACE+maxTextWidth}, 0)`
                    }}
                    />
                <XAxis 
                    dataKey="response" 
                    type="number"
                    hide 
                    axisLine={false}
                />

                <Bar dataKey="response" fill="#8884d8">
                {data.map((d:any, idx) => {
                    return <Cell key={d[xKey]} fill={getColor(data.length, idx)} />;
                })}
                </Bar>
                <Tooltip />
            </BarChart>
        </ResponsiveContainer>
    )
}