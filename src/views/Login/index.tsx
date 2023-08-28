import styles from "./login.module.scss";
import initLoginBg from "./init.ts"
import {useEffect} from "react";
import {Button, ConfigProvider, Input, Space} from "antd"
import "./login.less"

const LoginView = () => {
    // Load background after loading the component
    useEffect(() => {
        initLoginBg();
        window.onresize = () => {
            initLoginBg();
        }
    }, [])
    return (

        <div className={styles.loginPage}>
            {/* background */}
            <canvas id={"canvas"} style={{display: "block"}}></canvas>
            <div className={styles.loginBox + " loginBox"}>
                <div className={styles.title}>
                    <h1>Management System</h1>
                    <p>Test test</p>
                </div>
                {/* Form */}
                <ConfigProvider
                    theme={{
                        components: {
                            Input: {
                                colorTextPlaceholder: '#red',
                                algorithm: true, // Enable algorithm
                            }
                        },
                    }}
                >
                    <div className={"form"}>
                        <Space direction={"vertical"} size={"middle"} style={{display: "flex"}}>
                            <Input placeholder={"Username"}/>
                            <Input.Password placeholder={"Password"} className={"passwordInput"}/>
                            <Button type={"primary"} block>Login</Button>
                        </Space>
                    </div>
                </ConfigProvider>
            </div>

        </div>
    )
}

export default LoginView;