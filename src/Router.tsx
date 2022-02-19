import { Home } from "home";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Register } from "register";
import { Header, HEADER_HEIGHT } from "section/Header";
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
                </Routes>
            </Main>
        </HashRouter>
    )
}