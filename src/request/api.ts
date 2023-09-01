import request from "./index.ts"

// Types of requests and responses need to be restricted


// Request for captcha
export const CaptchaAPI = (): Promise<CaptchaResp> => request.get("/prod-api/captchaImage")