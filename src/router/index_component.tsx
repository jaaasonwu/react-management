import App from "../App.tsx"
import Home from "@/views/Home.tsx"
import About from "@/views/About.tsx"
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import React from "react";

const lazyLoadingComponent = (comp: JSX.Element) => (
    <React.Suspense fallback={<div>Loading...</div>}>
        {comp}
    </React.Suspense>
)
const baseRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<App/>}>
                /* Redirect to /home when visiting / */
                <Route path={"/"} element={<Navigate to={"/home"}/>}></Route>
                <Route path={"/home"} element={<Home/>}></Route>
                <Route path={"/about"} element={lazyLoadingComponent(<About/>)}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)

export default baseRouter;