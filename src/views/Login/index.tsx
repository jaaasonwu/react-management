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
                            <div className={"captchaBox"}>
                                <Input placeholder={"CAPTCHA"}/>
                                <div className="captchaImg">
                                    <img height="30px"
                                         src="data:image/gif;base64,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"
                                         alt=""/>
                                </div>
                            </div>
                            <Button type={"primary"} block>Login</Button>
                        </Space>
                    </div>
                </ConfigProvider>
            </div>

        </div>
    )
}

export default LoginView;