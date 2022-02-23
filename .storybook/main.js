const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

  // Add any Storybook addons you want here: https://storybook.js.org/addons/
  addons: [
    "@storybook/addon-links",

    {
      name: "@storybook/addon-essentials",
      options: {
        backgrounds: true,
      },
    },
    {
      name: "@storybook/addon-viewport",
    },
    {
      name: "@storybook/addon-postcss",
      options: {
        cssLoaderOptions: {
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  core: {
    builder: "webpack5",
  },
  reactOptions: {
    fastRefresh: true,
  },
  // webpackFinal: async (config) => {
  //   config.module.rules.push({
  //     test: /\.css$/,
  //     use: [
  //       {
  //         loader: "postcss-loader",
  //         options: {
  //           ident: "postcss",
  //           plugins: [require("tailwindcss"), require("autoprefixer")],
  //         },
  //       },
  //     ],
  //     include: path.resolve(__dirname, "../"),
  //   });
  //   return config;
  // },
};
