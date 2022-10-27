/**
 * getVerificationCode：获取验证码图片
 * 入参
 * {
 * imageWidth:图片宽度
 * imageHeight:图片高度
 * }
 * 
 * response:{
 *  captchaCode:验证码base64图片
 *  captchaKey：验证码key  提交表单验证要传的key
 * }
 * 
 * 
 * playerRegister:注册
 * 入参：{
  "username": "string"    用户名
  "email": "string",      邮箱
  "password": "string",   密码
  "agentTrackingCode": "string",  代理code
  "appVersion": "V2",     app版本号
  "currency": "CNY",      币种
  "language": "en-Us",    语言
  "marketingChannel": "facebook",  营销渠道
  "referralCode": "string",  推荐码
}
  response:{
    code:20000 成功
    data:{
      errorCode:错误码
      message: 错误信息
    }
  }


    sendEmail: 发送验证码
    入参{
      "email": "string" 邮箱地址
    }
    response:{
        code:20000 成功
        data:{
          errorCode:错误码
          message: 错误信息
        }
      }
 */
