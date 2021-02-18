module.exports = {
  presets: [
    [
      "@alicloud/console-toolkit-preset-component",
      {
        moduleName: "wind-component",
        external: ["widget-loader"],
        globals: {
          "wind-component": "WindComponent"
        },
        useTypescript: true
      }
    ]
  ]
};
