// import { useState } from 'react'

// import {useState} from "react";
// import {Button, Tour} from "antd";
// import {WechatOutlined} from "@ant-design/icons";
import { Outlet, Link } from "react-router-dom";

function App() {
    console.log("Test");

    // const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    //     event.preventDefault();
    //
    //
    //     setCount(count + 1);
    //
    // };


    return (
        <>
            <div className={"App"}>
                <Link to={"/home"}>Home</Link> |
                <Link to={"/about"}>About</Link>
                <Outlet/>
            </div>
            {/*<div>*/}
            {/*    <Button type={"primary"} onClick={buttonHandler}>{count}</Button>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <WechatOutlined style={{fontSize: "40px"}}/>*/}
            {/*</div>*/}
        </>
    )
}

export default App
