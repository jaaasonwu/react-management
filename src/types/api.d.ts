// Define types for response

// Response type for captcha request
interface CaptchaResp {
    msg: string;
    img: string;
    code: number;
    captchaEnabled: boolean;
    uuid: string;
}
// Request type for login request
interface LoginReq {
    username: string;
    password: string;
    code: string;
    uuid: string;
}

// Request type for login response
interface LoginResp {
    msg: string;
    code: number;
    token: string;
}