import styles from "./login.module.scss";
import initLoginBg from "./init.ts";
import {ChangeEvent, useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import {Button, ConfigProvider, Input, Space, message} from "antd";
import "./login.less";
import {CaptchaAPI, LoginAPI} from "@/request/api.ts";

const LoginView = () => {
    const navigateTo = useNavigate();
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

    const onSubmitLogin = async () => {
        console.log(username, password, captcha);
        if (!username.trim() || !password.trim() || !captcha.trim()) {
            message.warning("Please fill in all the information! ")
            return;
        }

        if (localStorage.getItem("uuid") === null) {
            alert("UUID not found. ")
            return;
        }
        const loginResp = await LoginAPI({
            username: username,
            password: password,
            code: captcha,
            uuid: localStorage.getItem("uuid") as string
        })

        if (loginResp.code === 200) {
            // Show login success
            message.success("Login successful! ");
            // Store token
            localStorage.setItem("management-token", loginResp.token);
            // Navigate to home page
            navigateTo("/page1");
            // Delete uuid in localstorage
            localStorage.removeItem("uuid");
        } else {
            message.error("Login failed! ")
        }
    }

    const getCaptchaImg = async () => {

        const captchaAPIRes = await CaptchaAPI();

        if (captchaAPIRes.code === 200) {
            // Show image on img
            setCaptchaImg("data:image/gif;base64," + captchaAPIRes.img)
            // Store UUID for login
            localStorage.setItem("uuid", captchaAPIRes.uuid);
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
                            <Input.Password placeholder={"Password"} className={"passwordInput"}
                                            onChange={onPasswordChange}/>
                            <div className={"captchaBox"}>
                                <Input placeholder={"CAPTCHA"} onChange={onCaptchaChange}/>
                                <div className="captchaImg" onClick={getCaptchaImg}>
                                    <img height="30px"
                                         src={captchaImg}
                                         alt=""/>
                                </div>
                            </div>
                            <Button type={"primary"} block onClick={onSubmitLogin}>Login</Button>
                        </Space>
                    </div>
                </ConfigProvider>
            </div>

        </div>
    )
}

export default LoginView;