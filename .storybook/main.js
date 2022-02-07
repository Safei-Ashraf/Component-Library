const path = require("path");

module.exports = {
    stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

    // Add any Storybook addons you want here: https://storybook.js.org/addons/
    addons: [{
        name: "@storybook/addon-postcss",
        options: {
            postcssLoaderOptions: {
                implementation: require("postcss"),
            },
        },
    }, ],
    core: {
        builder: "webpack5",
    },
    reactOptions: {
        fastRefresh: true,
    },
};