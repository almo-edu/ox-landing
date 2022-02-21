import { SUBJECTS } from "data/subjects.data";
import { Box, Text } from "materials";
import { NotFound } from "NotFound";
import { useParams } from "react-router-dom";
import styled from "styled-components"
import {FiCircle, FiX} from "react-icons/fi";
import { Tag } from "antd";
import { MAIN_COLOR } from "style/constants";
import { useSolvedProblemInfo } from "atoms/solved.atom";
import Modal from "antd/lib/modal/Modal";
import { useState } from "react";
import { Final } from "final";

const Wrapper = styled.div`
    padding: 16px 22px;

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
        aspect-ratio: 2.2;
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
            background-color: ${MAIN_COLOR};
            color: #ffffff;
        }
    }
`
interface QuizParamList {
    code: string
    [key: string]: string
}

export function Quiz(){
    const { code } = useParams<QuizParamList>();
    const subject = SUBJECTS.find(s => s.code === code?.toUpperCase())
    const {
        getNextProblem,
        solve
    } = useSolvedProblemInfo(code || "")

    const [myAnswer, setMyAnswer] = useState<boolean | null>(null)
    const onO = () => {
        setMyAnswer(true)
    }
    const onX = () => {
        setMyAnswer(false)
    }
    const onClose = () => {
        if(myAnswer === null)
            return;
        solve(myAnswer)
        setMyAnswer(null)
    }
    
    const problem = getNextProblem()
    if(!code || !subject)
        return <NotFound />
    if(!problem)
        return <Final code={code} />

    const {no, question, source, image, solution, answer} = problem
    const isFinal = no === subject.problems.length

    return (
        <Wrapper>
            <Box justifyContent="space-between">
                <Tag color="gold" children={subject.name} />
                <Tag color="default" children={`${no} / ${subject.problems.length}`} />
            </Box>
            <Box flexDirection="column">
                <Text type="P1" content={`${no}. ${question}`} marginTop={8} style={{lineHeight: 1.4}}/>
                <Text type="D1" content={source} align="right" marginVertical={5} />
                <div className="img-container">
                    <img src={image}/>
                </div>
                <div className="ox-container">
                    <button className="ox-pad" onClick={onO}>
                        <FiCircle size={64} />
                    </button>
                    <button className="ox-pad" onClick={onX}>
                        <FiX size={75} />
                    </button>
                </div>

            </Box>

            <Modal 
                title={myAnswer === answer ? "정답입니다!" : "틀렸습니다ㅠㅠ"} 
                visible={myAnswer!==null} 
                onOk={onClose} 
                onCancel={onClose}
                okText={isFinal ? "결과 보기" : "다음 문제로"}
                cancelButtonProps={{ style: { display: 'none' } }}
            >
                <Box flexDirection="column">
                    <Text type="D2" content={question} />
                    <Text type="P1" bold content={`정답 : ${answer ? "O" : "X"}`} marginTop={6}/>
                    <Text type="P2" content={solution} />
                </Box>
            </Modal>
        </Wrapper>

    )
}