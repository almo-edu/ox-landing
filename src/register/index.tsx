import styled from "styled-components"
import { Form, Input, Button, Checkbox, Radio } from 'antd';
import { ValidateErrorEntity } from "rc-field-form/lib/interface";
import { Box, Text } from "materials"
import { useState } from "react";

const Wrapper = styled.div`
    padding-top: 16px;
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
`

const subjects = [
    "한국사",
    "생활과 윤리",
    "윤리와 사상",
    "한국지리",
    "세계지리",
    "동아시아사",
    "세계사",
    "경제",
    "정치와 법",
    "사회·문화",
    "물리학 Ⅰ",
    "물리학 Ⅱ",
    "화학 Ⅰ",
    "화학 Ⅱ",
    "생명과학 Ⅰ",
    "생명과학 Ⅱ",
    "지구과학 Ⅰ",
    "지구과학 Ⅱ"
]

export function Register(){
    const [subjectSelected, setSubjectSelected] = useState<boolean[]>(Array(subjects.length).fill(false))
    const toggle = (index: number) => () => setSubjectSelected(prev => {
        const state = !prev[index]
        return prev.slice(0,index).concat([state]).concat(prev.slice(index+1))
    })

    const onFinish = (values:string) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo:ValidateErrorEntity) => {
        console.log('Failed:', errorInfo);
      };
    
      return (
          <Wrapper>
            <Form
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
            <Form.Item
                label="전화번호"
                name="tel"
                rules={[{
                    message: '전화번호를 입력해 주세요!', 
                }]}
            >
                <Input />
            </Form.Item>
        
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
                
                <Text type="P2" content="[ 사회탐구 ]" marginTop={12} marginBottom={5} />
                <div className="grid-box">
                    {subjects.slice(1,4).map((name, index) => (
                        <Button 
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
                            type={subjectSelected[index+7] ? "primary" :"default"} 
                            onClick={toggle(index+7)}
                            style={{flex: 1}}
                        >
                            {name}
                        </Button>
                    ))}
                </div>

                <Text type="P2" content="[ 과학탐구 ]" marginTop={12} marginBottom={5} />
                <div className="grid-box">
                    {subjects.slice(10,13).map((name, index) => (
                        <Button 
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
                name="remember"
                valuePropName="checked"
            >
                <Checkbox>개인정보 수집 및 이용에 동의합니다.</Checkbox>
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