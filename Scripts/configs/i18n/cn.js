const cnConfig = (function (exports) {
    let locale = {
        title: {
            complaints: '投訴箱',
            suggestion: '意見箱'
        },
        form: {
            userName: '用戶帳號',
            phoneNumber: '聯絡電話',
            chooseType: '問題選項',
            agentDetial: '代理人聯繫方式',
            suggestionInfo: '建議事項',
            complaintsInfo: '說明問題',
            submit: '提交',
            userNamePlease: '請輸入您的用戶帳號',
            agentPlease: '請輸入您的代理人聯繫方式',
            suggestionPlease: '請輸入您的建議',
            complaintsPlease: '請說明您的問題',
            gameProblem: '遊戲問題',
            loginComplaint: '登入問題',
            others: '其他'
        },
        alert: {
            success: '提交',
            tryAgain: '再試一次',
            progressing: '處理中...'
        }
    };
    exports.cn = locale;
    Object.defineProperty(exports, '__esModule', { value: true });
    return exports;
  }({}));