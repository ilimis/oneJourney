const enConfig = (function (exports) {
    let locale = {
        title: {
            complaints: 'Complaints Box',
            suggestion: 'Suggestion Box'
        },
        form: {
            userName: 'User name',
            phoneNumber: 'Phone number',
            chooseType: 'Choose type',
            agentDetial: 'Agent contact details',
            suggestionInfo: 'Suggestions info...',
            complaintsInfo: 'Complaints info...',
            submit: 'Submit',
            userNamePlease: 'Please enter your user name.',
            agentPlease: 'Please enter your agent contact details',
            suggestionPlease: 'Please enter your suggestions...',
            complaintsPlease: 'Please enter your complaints info...',
            gameProblem: 'Game problem',
            loginComplaint: 'Login complaint',
            others: 'Others',
        },
        alert: {
            success: 'Submit',
            tryAgain: 'Try Again',
            progressing: 'Progressing...'
        }
    };
    exports.en = locale;
    Object.defineProperty(exports, '__esModule', { value: true });
    return exports;
  }({}));