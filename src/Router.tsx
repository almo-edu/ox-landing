import { Home } from "home";
import { NotFound } from "NotFound";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Register } from "register";
import { Header, HEADER_HEIGHT } from "section/Header";
import { Solve } from "solve";
import styled from "styled-components";

const Main = styled.div`
    max-width: 720px;
    margin: auto;
    padding: ${HEADER_HEIGHT} 22px 22px 22px;

`

export function Router(){
    return (
        <HashRouter>
            <Header />
            <Main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/:code/:no" element={<Solve />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Main>
        </HashRouter>
    )
}