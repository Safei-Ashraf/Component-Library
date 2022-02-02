const path = require("path");

module.exports = {
    stories: ["../src/**/*.stories.tsx"],
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
};