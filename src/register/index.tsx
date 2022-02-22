import styled from "styled-components"
import { Form, Input, Button, Checkbox, Divider, Radio } from 'antd';
import { MdRemove } from 'react-icons/md'
import { Box, Text } from "materials"
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { register_api } from "api/register.api";
import { useNavigate } from "react-router-dom";
import { Event } from "./Event"
import { Gifts } from "./Gifts";
import { subjects_list } from "data/subjects-list.data";


const Wrapper = styled.div`
    padding: 16px 22px;
    .ant-form-item {
        margin-bottom: 6px;
    }
    .ant-col{
        padding-bottom: 6px;
        label {
            height: 24px;
        }
    }
    label {
        font-size: 15px;
    }
    .grid-box {
        margin-bottom: 6px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 8px;
    }
    .ant-divider-horizontal {
        margin: 12px 0;
    }
    .ant-radio-group-small {
        display: flex;
        & > * {
            flex: 1;
            text-align: center;
        }
        & * {
            font-size: 13px;
        }
    }

    .policy * {
        font-size: 9px;
        height: 13px;
    }
`


export function Register(){
    const navigate = useNavigate()
    const [subjectSelected, setSubjectSelected] = useState<boolean[]>(Array(subjects_list.length).fill(false))
    const toggle = (index: number) => () => setSubjectSelected(prev => {
        const state = !prev[index]
        return prev.slice(0,index).concat([state]).concat(prev.slice(index+1))
    })

    const [tel1, setTel1] = useState<string>("")
    const tel2ref = useRef<Input>(null)
    const [tel2, setTel2] = useState<string>("")
    const tel3ref = useRef<Input>(null)
    const [tel3, setTel3] = useState<string>("")

    const onChangeTel = ({target:{value, name}}:ChangeEvent<HTMLInputElement>) => {
        if(isNaN(+value))
            return
        switch (name) {
            case "tel1":
                if(value.length===3)
                    tel2ref.current?.focus()
                    setTel1(value)
                    break;
            case "tel2":
                if(value.length===4)
                    tel3ref.current?.focus()
                setTel2(value)
                break;
            case "tel3":
                setTel3(value)
                break;
        
            default:
                break;
        }
    }


    const onSubmit = ({agree, grade}:{agree:boolean, grade: string}) => {
        console.log(agree, grade)
        const tel=`${tel1}${tel2}${tel3}`
        if(!grade){
            alert('모의고사(탐구) 평균 등급을 선택해 주세요!')
            return;
        }
        if(tel.length!==11){
            alert("전화번호를 확인해주세요.")
            return;
        }
        if(!subjectSelected.some(i=>i)) {
            alert("관심과목을 선택해주세요.")
            return;
        }
        const subject_selected = subjects_list.filter((s, i) => subjectSelected[i])
        register_api(tel, subject_selected, grade).then(() => navigate('/thankyou'))
    }

    // 가장 위로 이동
    useEffect(()=>window.scrollTo(0, 0),[])

    return (
        <>
        <Event />
        <Gifts />
         <Wrapper>
            <Form 
                autoComplete="off"
                onFinish={onSubmit}
            >
                <Box flexDirection="column" marginVertical={12}>
                    <Text 
                        type="P1" 
                        content="*전화번호" 
                        marginBottom={6} 
                    />
                    <Box alignItems="center" style={{width: 300}}>
                        <Input
                            style={{width: 60}} 
                            maxLength={3} 
                            value={tel1} 
                            name="tel1"
                            type="tel"
                            onChange={onChangeTel}
                        />
                        <MdRemove color="#a4a2a9" style={{margin:4}} />
                        <Input 
                            ref={tel2ref}
                            style={{width: 70}} 
                            maxLength={4} 
                            value={tel2} 
                            name="tel2"
                            type="tel"
                            onChange={onChangeTel}
                            tabIndex={2}
                        />
                        <MdRemove color="#a4a2a9" style={{margin:4}} />
                        <Input 
                            ref={tel3ref}
                            style={{width: 70}}
                            maxLength={4} 
                            name="tel3"
                            value={tel3} 
                            type="tel"
                            onChange={onChangeTel} 
                            tabIndex={3}
                        />
                    </Box>
                </Box>


                <Form.Item 
                    label="*모의고사 평균 등급(탐구)" 
                    name="grade" 
                >
                    <Radio.Group size="small">
                        <Radio.Button value="1~2등급">1~2등급</Radio.Button>
                        <Radio.Button value="3~4등급">3~4등급</Radio.Button>
                        <Radio.Button value="5~6등급">5~6등급</Radio.Button>
                        <Radio.Button value="7~9등급">7~9등급</Radio.Button>
                        <Radio.Button value="모름">모름</Radio.Button>
                    </Radio.Group>
                </Form.Item>

            
                <Box flexDirection="column" marginVertical={12} >
                    <Text 
                        type="P1" 
                        content="*관심있는 탐구 과목을 선택해주세요." 
                        marginBottom={6} 
                    />

                    {/* 한국사 */}
                    <Text type="P2" content="[ 공통 ]" marginBottom={5} />
                    <div className="grid-box">
                        <Button type={subjectSelected[0] ? "primary" :"default"} onClick={toggle(0)}>
                            {subjects_list[0]}
                        </Button>
                    </div>



                    <Divider />
                    {/* 사탐 */}
                    <Text type="P2" content="[ 사회탐구 ]" marginBottom={5} />
                    <div className="grid-box">
                        {subjects_list.slice(1,4).map((name, index) => (
                            <Button 
                                key={index+1}
                                type={subjectSelected[index+1] ? "primary" :"default"} 
                                onClick={toggle(index+1)}
                                style={{flex: 1}}
                            >
                                {name}
                            </Button>
                        ))}
                    </div>
                    <div className="grid-box">
                        {subjects_list.slice(4,7).map((name, index) => (
                            <Button 
                                key={index+4}
                                type={subjectSelected[index+4] ? "primary" :"default"} 
                                onClick={toggle(index+4)}
                                style={{flex: 1}}
                            >
                                {name}
                            </Button>
                        ))}
                    </div>
                    <div className="grid-box">
                        {subjects_list.slice(7,10).map((name, index) => (
                            <Button 
                                key={index+7}
                                type={subjectSelected[index+7] ? "primary" :"default"} 
                                onClick={toggle(index+7)}
                                style={{flex: 1}}
                            >
                                {name}
                            </Button>
                        ))}
                    </div>

                    <Divider />
                    {/* 과탐 */}
                    <Text type="P2" content="[ 과학탐구 ]" marginBottom={5} />
                    <div className="grid-box">
                        {subjects_list.slice(10,13).map((name, index) => (
                            <Button 
                                key={index+10}
                                type={subjectSelected[index+10] ? "primary" :"default"} 
                                onClick={toggle(index+10)}
                                style={{flex: 1}}
                            >
                                {name}
                            </Button>
                        ))}
                    </div>
                    <div className="grid-box">
                        {subjects_list.slice(13,16).map((name, index) => (
                            <Button 
                                key={index+13}
                                type={subjectSelected[index+13] ? "primary" :"default"} 
                                onClick={toggle(index+13)}
                                style={{flex: 1}}
                            >
                                {name}
                            </Button>
                        ))}
                    </div>
                    <div className="grid-box">
                        <Button type={subjectSelected[16] ? "primary" :"default"} onClick={toggle(16)}>
                            {subjects_list[16]}
                        </Button>
                        <Button type={subjectSelected[17] ? "primary" :"default"} onClick={toggle(17)}>
                            {subjects_list[17]}
                        </Button>
                    </div>
                </Box>

                <Form.Item
                    name="agree"
                    valuePropName="checked"
                >
                    <Checkbox>
                        개인정보 수집 및 활용에 동의합니다.
                    </Checkbox>
                    <Box flexDirection="column" className="policy">
                        <Text 
                            type="D2"
                            content="개인정보의 수집·이용 목적: 이벤트 진행" 
                        />
                        <Text 
                            type="D2"
                            content="수집하려는 개인정보의 항목: 전화번호, 모의고사 평균 등급, 선택 탐구과목" 
                        />
                        <Text 
                            type="D2"
                            content="개인정보의 보유 및 이용기간: 이벤트 종료 및 서비스 출시 알림 전송 후 파기" 
                        />
                        <Text 
                            type="D2"
                            content="*동의를 거부할 권리가 있으며 동의 거부시 이벤트 참여가 제한될 수 있습니다." 
                        />
                    </Box>
                </Form.Item>


                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        사전 예약하고 이벤트 참여하기
                    </Button>
                </Form.Item>
            </Form>
        </Wrapper>
        </>
    );
}