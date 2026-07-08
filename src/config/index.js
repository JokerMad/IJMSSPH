// const API_URL =
//     document.domain === 'localhost'
//     ? "http://localhost:4500"
//     : "production";
const API_URL = 'https://wfwha34bb4.execute-api.ap-south-1.amazonaws.com/prod'
const Apis = {

  //User api
  GetUserLogin: `/user/login`,
  GetUserRegsiter: `/user/register`,
  GetUserVerify: `/user/verify`,
  GetUserResendOtp: `/user/resendOtp`,
  GetUserForgetPass: `/user/forget-password`,
  GetUserResetPass: `/user/reset-password`,
  GetDeleteUserList: `/user`,


  // panel API Path
  GetSubmitArticle: `/mail/submit`,
  GetAllUserArticle: `/article/getbyid`,

  // public Articl API
  GetAllSearchArticle: `/articles/search`,
  GetAllMostDownloadArticle: `/articles/mostDownloaded`,
  GetAllMostViewArticle: `/articles/mostView`,
// https://5murdakpl0.execute-api.ap-south-1.amazonaws.com/prod/mail/submit
  // fileview URL
  GetFileViewPath: `/file-view`,
};
export { API_URL, Apis };
