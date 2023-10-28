const BoxConfig = (function (exports) {
    const optionInfo = {
        code: ['MYS+60', 'MYS +60', 'IDN +62', 'PHL +63', 'SGP +65', 'THA +66', 'VNM +84', 'Other'],
        type: [
            {
                key: 1,
                value: 'Game problem',
                langKey: 'form.gameProblem'
            },
            {
                key: 2,
                value: 'Login complaint',
                langKey: 'form.loginComplaint'
            },
            {
                key: 3,
                value: 'Others',
                langKey: 'form.others'
            },
        ],
    };

    const mainUrl = '../MessageBox';
    const apiUrl = {
        submitMsg: `${mainUrl}/SubmitMessage`,
    };

    exports.optionInfo = optionInfo;
    exports.apiUrl = apiUrl;
    Object.defineProperty(exports, '__esModule', { value: true });
    return exports;
  }({}));