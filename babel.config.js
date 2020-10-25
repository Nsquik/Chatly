module.exports = function (api) {
  if (api) {
    api.cache(true);
  }
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
          blacklist: null,
          whitelist: null,
          safe: false,
          allowUndefined: true,
        },
      ],
      [
        require.resolve("babel-plugin-module-resolver"),
        {
          cwd: "babelrc",
          extensions: [".ts", ".tsx", ".js", ".ios.js", ".android.js"],
          alias: {
            "@res": "./resources",
            "@nav": "./navigation",
            "@type": "./types",
            "@assets": "./assets",
            "@screens": "./screens",
            "@components": "./components",
            "@hooks": "./hooks",
            "@queries": "./queries",
          },
        },
      ],
    ],
  };
};
