module.exports = {
    env: {
        browser: true
    },
    parserOptions: {
        ecmaVersion: 2018,
    },
    plugins: ['html'],
    rules: {
        'no-underscore-dangle': 0,
        'vars-on-top': 0,
    },
    settings: {
        'html/indent': '+2'
    }
};