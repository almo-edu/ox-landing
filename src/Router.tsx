import { Home } from "home";
import { HashRouter, Route, Routes } from "react-router-dom";

export function Router(){
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </HashRouter>
    )
}