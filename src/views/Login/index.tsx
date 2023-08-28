import styles from "./login.module.scss";
import initLoginBg from "./init.ts"
import {ChangeEvent, useEffect, useState} from "react";
import {Button, ConfigProvider, Input, Space} from "antd"
import "./login.less"

const LoginView = () => {
    // Load background after loading the component
    useEffect(() => {
        initLoginBg();
        window.onresize = () => {
            initLoginBg();
        }
    }, []);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [captcha, setCaptcha] = useState("");
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
                                <div className="captchaImg">
                                    <img height="30px"
                                         src="data:image/gif;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgK
                                         DBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQw
                                         LDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMj
                                         L/wAARCAA8AKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAA
                                         gEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRol
                                         JicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5i
                                         ZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8
                                         QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEB
                                         SExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElK
                                         U1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm
                                         6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDU8L+GNAuPCe
                                         jTTaHpkksljA7u9pGWZiikkkjkmtceEfDf/QvaT/4BR/4UnhH/AJE3Q/8AsH2//ota1ri5gsraS5uZk
                                         hgjXc8jnCqPUmgDNHhHw1/0L2k/+AUf/wATTh4Q8Nf9C7pP/gFH/wDE1PDrmlz6b/aMV/btZc/v942c
                                         HB5+ork7r4v+F7a9FvHNPcLnDSxxnYPz5P5YoA6Z/CfhaKNpJPD+jqigszNZRAADueKZZeG/CGoWcV3
                                         aaFos1vKoaORLKIhh/wB81jeKNSHiJtP8M6XPxqaCe7nQ/wCqtB94+xb7o/GurS70vTLWOAXFtbwQIE
                                         VTIFCKBgDk+lAFYeDvDH/QuaR/4Axf/E08eDvC/wD0Lej/APgDF/8AE1bsdX07UWZbO9gnKfeEcgbH5
                                         U7UNZ03SYhJqF9b2qE4BlkC5/OgCoPBvhf/AKFvR/8AwBi/+Jp48GeFv+ha0f8A8AYv/iasWevaTfpu
                                         tNStJh/sTKcfrxWj5ihc5GPWgDIHgzwt/wBC1o//AIAxf/E08eC/Cv8A0LWjf+AEX/xNc1qfxg8KaVq
                                         TWT3M0zI215II9yqfr3/Cuv0XX9L1+yW70u8juYT/ABLwR9QeR+NAFceCvCv/AELOjf8AgBF/8TTh4K
                                         8Kf9Czo3/gBF/8TVvVdZsND06W/wBRuFgtohl3bn8gOSfYV5tH8fdBOp+Q2n3a2m7H2nIPHrt6/rQB6
                                         CPBPhT/AKFjRf8AwAi/+JpW8F+EY0Z38NaIqqMlmsIgAP8AvmsJviIdXc23g/Sp9Zn6NctmG1iP+1I3
                                         Uj0A5rF8QWlpZWy6h8SvEhukJzHpNkGjts+m0fNJj1Yj3oAnvLzwTcXT6f4W8EaZ4hv1OGNrYQrbxH/
                                         bmK7R+GaLT4QW+sXKXvieDS4FU7k03RrRLeJfZ5AA7/mPaneD/i14V1LUYNC06wk02JjstlaNUQn0wv
                                         AJr1JCGGRQBgxeA/CEcaovhfRiFGAWsY2P4kjJrJ8Y+DfC9r4H8QXFv4b0eGeLTbh45I7GJWRhExBBC
                                         5BB713ArD8cf8k+8Sf9gq6/9FNQByXhH/kTNC/7B9v/AOi1pvjBBN4P1mLu9lKB9dhx+tP8I/8AImaF
                                         /wBg+3/9FrU+tW5udNuIR/y0jZPzGKAPm7w5N/ad7Z6VqN1INNj3MsAfCsxOcfia0fHaafD9jgs7WGB
                                         lySI1A+WucurAaf8Aare6Zo763m2FByGH+R196fFp+p3IW5SJ5lTBUsc5HXgHkigDpbsajo/gqK5jml
                                         S5vGUXDg4ZIgMRp7Dufc1S0zQLHV9OW4bVJvPA+eMjO010Gj63B4g02axvEVLpFO+MjiQdyB/MVwlyo
                                         t9Ski0ySUqcrgHk+3vQB2fwoaa08WXEiOTbxRsrEdGOcCl+Kks1x4wtp7tnaxZVCgHgAY3D61jeFvFX
                                         /CNzeRc2W6ItlyvD/XnrXT+PNV0+fRraaNVuoLvJicHGCO/1FAFLXvDmjxaI2paOZLeWNPMBWQkOP6f
                                         hWr4S1/WLj4b6vbLcSvOMx27M2TjAyAfpXnEd7qcejPbqXNi5xyMhee3pXS6D4v0/TtKSwFlP5nQYdc
                                         Mx7knGKAM7wvqFhYXM9hrFhDJHOcbpkyUb+n1q9p+tf8IR44WXS7gixZl82PdkbD1B9cVz+tXVxf6vI
                                         lxEsLq5TYDnbz0J707Svs2mazE2qRMY1IIIGR9fcUAdZ8TvGreJNVtEtvNbTIAHjWVGRZm7tg4JHasC
                                         71Sx1DRne7nlkvANsMCKI4ovcKvX6muu8VXdldeHTqMLQXaDCo2A20n+VefWumS3dmbiD5pFY/JjrQB
                                         6t8NPFd3ovw91ViC4sy0kCn3GT+vNcXpOrabrus3OpeKp3ubxz+7WUkR4/D+XSt7wZr1pf2TaVMqQXW
                                         CvlkYWUd8e/qK5DxPpdnYautpaqySOQWBOVXPTFAF21gj1Tx9A2jQiK3imRsxjCjaeSK+s9LnM1urH0
                                         r5C0+51TwhfR3kaiW2LDeP4X9j6GvqHwH4k07xLoMV7YSZH3ZIyfmjfupoA68Vh+OP+SfeJf+wVdf8A
                                         opq3RWF45/5J94l/7BV1/wCimoA5Pwj/AMiZoX/YPt//AEWta0yBoyKyvCH/ACJmhf8AYPt//Ra1b1u
                                         G/n0S9j0uURX7RMIHOMB8cdQRQB458TPC3n3DalZQk3Of3wXOXAGAQPUYFc/pnieyht1jv7eaOdBglE
                                         yDj+VdTdfD7x3f/PqfiFBnqscrn9AAKoj4Tybt13qU0zf7MeP1JNAHD6tqkMutjUNODRsMEkjGSPb+d
                                         UnuEi1EXMJ3KW37fTPUV6IfhrbxOAFmkH+23+AFacfghIodotY9p6jYOaAPNdT1iC/thCtphgQVkZuR
                                         Utjp2qalpX2UOqWqOZFV153EdjjgV6JB4Kt0kBjsY1b125rqLHwkVgwUx+FAHi+h21p9vaw1bMcit+7
                                         ErEJn+X+NX/F9lp1tbQrAsK3W4YEWOV9wK9G1fwVZXwCXdruK/ddThh+NU9O8AabayhoLVnk/vyncR9
                                         O1AHml3ot3cWkV2iMZwg8xe7YHUe9aOlyaZrdibS9Kx3KjucHPqp/pXr//AAiOINwTmuN8QeA7W8maX
                                         y2hnPV4/wCL6igDzqygKatPpYlMlvKWRivQ45DfUYFW4IdQ8MXJneAz2bH5ivQ/4Gu88NeAo7WfcqvI
                                         543uBx9PSuxm8KtDCcJkEcgjrQB4x4ifSr2GPVdLuAl0CPNjHyt9ceo9ao3C3uvW6agu6W5iHly46tj
                                         ow9/8K7LW/h/BJdF7eN4GJ5VOV/Kug8N+CGt7QRop65JI5JoA89i8StFZSWmqaazB1KMcbc/ge9SfDn
                                         xbceE/FtvLFIxsrhxFcRE8MpPB+o6/p3r1LUPCMrwFGhDjHRlzWJpXw/thqsc0lngo2QBwM/SgD6ItJ
                                         1nhV1OQRmsrxz/yT3xL/wBgq6/9FNVnRUZLRFIxgVX8c/8AJPfEv/YKuv8A0U1AHJ+EP+RL0L/sHW//
                                         AKLWtsV876b8YvEOl6ZaafBZ6Y0VrCkKF4pCxVVCjOHHOBVr/hePib/nx0j/AL8yf/HKAPfygbqKYbS
                                         Nv4RXgn/C8/E3/PjpH/fmT/45S/8AC9PE/wDz4aR/35l/+OUAe8f2fETnaKk+wREY2ivBP+F7eJ/+fD
                                         SP+/Mv/wAcpf8Ahe/ij/nw0f8A78y//HKAPe006EHOwVaS3RRgKK+e/wDhfPij/nw0f/vzL/8AHKX/A
                                         IX14p/58NH/AO/Mv/xygD36XTopTyopIdLijOQorwP/AIX54p/58NG/78y//HKX/hfviof8w/Rv+/Mv
                                         /wAcoA+iBbJs24FUrjRYZjkqK8F/4X/4q/6B+jf9+Zf/AI5S/wDDQHiv/oH6L/35l/8AjlAHvtpo8Nu
                                         chRWg1pG6YKivnP8A4aC8Vj/mH6L/AN+Zf/jlL/w0J4s/6B+i/wDfmX/45QB71N4ft5X3FB+VXbTSob
                                         dcBRXzz/w0L4s/6B2if9+Jf/jlL/w0P4tH/MO0T/vxL/8AHKAPo57CJxgoKjTSYFfcEGa+d/8Ahojxd
                                         /0DtE/78S//AB2l/wCGivF3/QO0T/vxL/8AHaAPpiGIRrgCsbxz/wAk98S/9gq6/wDRTV4D/wANF+L/
                                         APoHaH/34l/+O1U1b49+KdY0a+0u4sNGWC8t5LeRo4ZQwV1KkjMhGcH0NAH/2Q=="
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