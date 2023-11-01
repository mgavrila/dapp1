const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv = {}) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "micro",
    projectName: "dapp",
    webpackConfigEnv,
  });

  const config = merge(defaultConfig, {
    // customizations go here
  });

  return config;
};
