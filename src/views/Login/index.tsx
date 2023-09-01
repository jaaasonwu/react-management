import styles from "./login.module.scss";
import initLoginBg from "./init.ts";
import {ChangeEvent, useEffect, useState} from "react";
import {Button, ConfigProvider, Input, Space} from "antd";
import "./login.less";
import {CaptchaAPI} from "@/request/api.ts";

const LoginView = () => {
    // Load background after loading the component
    useEffect(() => {
        initLoginBg();
        window.onresize = () => {
            initLoginBg();
        }

        getCaptchaImg();
    }, []);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [captcha, setCaptcha] = useState("");
    // Store captcha img info
    const [captchaImg, setCaptchaImg] = useState("");
    const onUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const onCaptchaChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCaptcha(e.target.value);
    }

    const onSubmitLogin = () => {
        console.log(username, password, captcha);
    }
    const getCaptchaImg = async () => {

        const captchaAPIRes = await CaptchaAPI();

        if (captchaAPIRes.code === 200) {
            // Show image on img
            setCaptchaImg("data:image/gif;base64," + captchaAPIRes.img)
            // Store UUID for login
        }
    }


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
                            <Input placeholder={"Username"} onChange={onUsernameChange}/>
                            <Input.Password placeholder={"Password"} className={"passwordInput"} onChange={onPasswordChange}/>
                            <div className={"captchaBox"}>
                                <Input placeholder={"CAPTCHA"} onChange={onCaptchaChange}/>
                                <div className="captchaImg" onClick={getCaptchaImg}>
                                    <img height="30px"
                                         src={captchaImg}
                                         alt=""/>
                                </div>
                            </div>
                            <Button type={"primary"}  block onClick={onSubmitLogin}>Login</Button>
                        </Space>
                    </div>
                </ConfigProvider>
            </div>

        </div>
    )
}

export default LoginView;