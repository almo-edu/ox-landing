import { Home } from "home";
import { NotFound } from "NotFound";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Register } from "register";
import { Header, HEADER_HEIGHT } from "section/Header";
import { Solve } from "solve";
import styled from "styled-components";
import { Thankyou } from "thankyou";

const Main = styled.div`
    max-width: 500px;
    margin: auto;
    padding: ${HEADER_HEIGHT} 0 0 0 ;

`

export function Router(){
    return (
        <HashRouter>
            <Header />
            <Main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/quiz/:code" element={<Solve />} />
                    <Route path="/thankyou" element={<Thankyou />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Main>
        </HashRouter>
    )
}