module.exports = {
    babel: {
        plugins: [
            ["@babel/plugin-proposal-decorators", {legacy: true}]
        ],
    },
    eslint: {
        enable: true,
        mode: "extends",
        configure: (eslintConfig) => {
            // 添加装饰器支持到 ESLint
            eslintConfig.parser = "babel-eslint";
            eslintConfig.plugins = ["babel"];
            eslintConfig.rules = {
                ...eslintConfig.rules,
                "babel/new-cap": 0,
                "no-unused-expressions": 0,
                "babel/no-unused-expressions": 1
            };
            return eslintConfig;
        }
    }
};