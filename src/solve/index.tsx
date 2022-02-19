import { SUBJECTS } from "data/subjects.data";
import { Box, Text } from "materials";
import { NotFound } from "NotFound";
import { useParams } from "react-router-dom";
import styled from "styled-components"
import {FiCircle, FiX} from "react-icons/fi";

// background-color: #19CE6066;

const Wrapper = styled.div`
    padding-top: 24px;
    padding-bottom: 16px;
    .img-container {
        width: 100%;
        height: 250px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    img {
        max-width: 100%;
        max-height: 100%;
    }
    .ox-container {
        margin-top: 48px;
        padding: 0 12px;
        aspect-ratio: 1.4;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;
    }
    .ox-pad {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

        :active {
            box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
        }
    }
`
interface SolveParamList {
    code: string
    no: string
    [key: string]: string
}

export function Solve(){
    const { code, no } = useParams<SolveParamList>();
    const subject = SUBJECTS.find(s => s.code === code?.toUpperCase())
    
    if(!code || !subject || !no || isNaN(+no) || subject.problems.length < +no)
        return <NotFound />
    const {
        question,
        source,
        image
    } = subject.problems[+no-1]


    return (
        <Wrapper>
            <Box flexDirection="column">
                <Text type="H1" content={subject.name} />
                <Text type="P1" content={`${no}. ${question}`} marginTop={12} />
                <Text type="D1" align="right" content={source} marginBottom={16} />
                <div className="img-container">
                    <img src={image}/>
                </div>
                <div className="ox-container">
                    <button className="ox-pad">
                        <FiCircle size={64} />
                    </button>
                    <button className="ox-pad">
                        <FiX size={72} />
                    </button>
                </div>

            </Box>
        </Wrapper>
    )
}