module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "eslint":"recommended",
        "plugin":"react/recommended",
        "indent": ["error", 2],
        "quotes": ["error", "single"],
        "comma-dangle": ["error"],
        "no-console": "off",
        "no-undef": "off",
        "react/prop-types": "off"
    }
};