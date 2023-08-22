// import { useState } from 'react'

// import {useState} from "react";
// import {Button, Tour} from "antd";
// import {WechatOutlined} from "@ant-design/icons";

// component method:
import { Outlet, Link } from "react-router-dom";
// Array method:
// import { useRoutes, Link } from "react-router-dom";
// import router from "@/router/index_component.tsx";

function App() {
    console.log("Test");

    // const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    //     event.preventDefault();
    //
    //
    //     setCount(count + 1);
    //
    // };

    // array method:
    // const outlet = useRoutes(router);


    return (
        <>
            <div className={"App"}>
                <Link to={"/home"}>Home</Link> |
                <Link to={"/about"}>About</Link>
                {/* component method: */}
                <Outlet/>
                {/* array method: */}
                {/*{outlet}*/}
            </div>

        </>
    )
}

export default App
