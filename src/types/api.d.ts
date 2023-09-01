// Define types for response

// Response type for captcha request
interface CaptchaResp {
    msg: string;
    img: string;
    code: number;
    captchaEnabled: boolean;
    uuid: string;
}