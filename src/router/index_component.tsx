// import App from "../App.tsx";
import Home from "@/views/Home.tsx";
import Login from "@/views/Login";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import React, {lazy} from "react";

const Page1 = lazy(() => import("../views/Page1.tsx"));
const Page2 = lazy(() => import("../views/Page2.tsx"));
const Tom = lazy(() => import("../views/Tom.tsx"));

const lazyLoadingComponent = (comp: JSX.Element) => (
    <React.Suspense fallback={<div>Loading...</div>}>
        {comp}
    </React.Suspense>
)
const baseRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Navigate to={"/login"}/>}>
                /* Redirect to /home when visiting / */
            {/*    /!*<Route path={"/"} element={<Navigate to={"/home"}/>}></Route>*!/*/}
            {/*    <Route path={"/home"} element={<Home/>}></Route>*/}
            {/*    <Route path={"/about"} element={lazyLoadingComponent(<About/>)}></Route>*/}

            </Route>
            <Route path={"/"} element={<Home/>}>
                <Route path={"/page1"} element={lazyLoadingComponent(<Page1/>)}></Route>
                <Route path={"/page2"} element={lazyLoadingComponent(<Page2/>)}></Route>
                <Route path={"/user/Tom"} element={lazyLoadingComponent(<Tom/>)}></Route>
            </Route>
            // Navigate to home page when visiting non-existent path
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"*"} element={<Navigate to={"/page1"}/>}></Route>
        </Routes>
    </BrowserRouter>
)

export default baseRouter;