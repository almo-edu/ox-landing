import styled from "styled-components"
import { Form, Input, Button, Checkbox, Divider } from 'antd';
import { MdRemove } from 'react-icons/md'
import { Box, Text } from "materials"
import { ChangeEvent, useRef, useState } from "react";
import { register_api } from "api/register.api";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    padding: 16px 22px;
    .ant-form-item {
        margin-bottom: 6px;
    }
    .ant-col{
        padding-bottom: 6px;
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
    .call-out {
        background-color: #e3f1ff;
        border-radius: 5px;
        margin: auto;
        padding: 6px;
        & > span{
            height: 12px;
        }
    }
    .ant-divider-horizontal {
        margin: 12px 0;
    }
`

const subjects = [
    "한국사",

    "생활과 윤리", "윤리와 사상", "한국지리",
    "세계지리", "동아시아사", "세계사",
    "경제", "정치와 법", "사회·문화",

    "물리학 Ⅰ", "물리학 Ⅱ", "화학 Ⅰ", "화학 Ⅱ",
    "생명과학 Ⅰ", "생명과학 Ⅱ", "지구과학 Ⅰ","지구과학 Ⅱ"
]

export function Register(){
    const navigate = useNavigate()
    const [subjectSelected, setSubjectSelected] = useState<boolean[]>(Array(subjects.length).fill(false))
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


    const onSubmit = ({agree, email}:{agree:boolean, email?: string}) => {
        const tel=`${tel1}${tel2}${tel3}`
        if(!tel && !email){
            alert("전화번호나 이메일 중 하나를 입력해주세요.")
            return;
        }
        if(!email && tel.length!==11){
            alert("전화번호를 확인해주세요.")
            return;
        }
        if(!subjectSelected.some(i=>i)) {
            alert("관심과목을 선택해주세요.")
            return;
        }
        if(!agree){
            alert("개인정보 수집 및 활용에 동의해주세요.")
            return;
        }
        const subject_selected = subjects.filter((s, i) => subjectSelected[i])
        register_api(tel, subject_selected, email).then(() => navigate('/thankyou'))
    }

    return (
         <Wrapper>
            <Form 
                autoComplete="off"
                onFinish={onSubmit}
            >
                <div className="call-out">
                    <Box flexDirection="column" alignItems="center">
                        <Text size={12} content='💡 "오늘의 선지"는 4월 중, iOS/Android 동시 출시예정이에요.' marginBottom={-2} />
                        <Text size={12} content="아래의 항목을 작성하여 누구보다 빠르게 출시 소식을 받아보세요."  />
                    </Box>
                </div>

                <Box flexDirection="column" marginTop={12} marginBottom={24}>
                    <Text 
                        type="P1" 
                        content="전화번호" 
                        marginBottom={6} 
                    />
                    <Box alignItems="center" style={{width: 300}}>
                        <Input
                            style={{width: 60}} 
                            maxLength={3} 
                            value={tel1} 
                            name="tel1"
                            onChange={onChangeTel}
                        />
                        <MdRemove color="#a4a2a9" style={{margin:4}} />
                        <Input 
                            ref={tel2ref}
                            style={{width: 70}} 
                            maxLength={4} 
                            value={tel2} 
                            name="tel2"
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
                            onChange={onChangeTel} 
                            tabIndex={3}
                        />
                    </Box>
                </Box>

                <Text 
                    type="P1" 
                    content="이메일"  
                />
                <Form.Item
                    name="email"
                    // valuePropName="email"
                    rules={[{ 
                        type: 'email',
                        message: '이메일 형식이 올바르지 않습니다.'
                    }]}
                    style={{marginTop: 6}}
                >
                    <Input  />
                </Form.Item>


                <Text type="D2" content="전화번호 혹은 이메일을 통해 출시 소식을 알려드릴게요!" />
                <Divider />
            
                <Box flexDirection="column" marginVertical={12} >
                    <Text 
                        type="P1" 
                        content="관심있는 탐구 과목을 선택해주세요." 
                        marginBottom={6} 
                    />

                    {/* 한국사 */}
                    <Text type="P2" content="[ 공통 ]" marginBottom={5} />
                    <div className="grid-box">
                        <Button type={subjectSelected[0] ? "primary" :"default"} onClick={toggle(0)}>
                            {subjects[0]}
                        </Button>
                    </div>



                    <Divider />
                    {/* 사탐 */}
                    <Text type="P2" content="[ 사회탐구 ]" marginBottom={5} />
                    <div className="grid-box">
                        {subjects.slice(1,4).map((name, index) => (
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
                        {subjects.slice(4,7).map((name, index) => (
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
                        {subjects.slice(7,10).map((name, index) => (
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
                        {subjects.slice(10,13).map((name, index) => (
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
                        {subjects.slice(13,16).map((name, index) => (
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
                            {subjects[16]}
                        </Button>
                        <Button type={subjectSelected[17] ? "primary" :"default"} onClick={toggle(17)}>
                            {subjects[17]}
                        </Button>
                    </div>
                </Box>

                <Form.Item
                    name="agree"
                    valuePropName="checked"
                >
                    <Checkbox>개인정보 수집 및 활용에 동의합니다.</Checkbox>
                </Form.Item>


                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        제출
                    </Button>
                </Form.Item>
            </Form>
        </Wrapper>
    );
}