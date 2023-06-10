module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript", "prettier"],
  parserOptions: {
    project: "**/tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/consistent-type-imports": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
  },
  settings: {
    react: {
      version: "detect", // React 버전을 자동으로 감지합니다.
    },
  },
};
