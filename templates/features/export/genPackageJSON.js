const genPackageJSON = (name) =>
  JSON.stringify({
    name,
    version: "1.0.0",
    description: "The export extension of eoapi",
    main: "dist/index.js",
    moduleID: name,
    moduleName: name,
    moduleType: "feature",
    logo: "https://s3.bmp.ovh/imgs/2022/05/18/d8d200e3dc050831.png",
    scripts: {
      build: "rollup -c rollup.config.js",
      "build:watch": "rollup -w -c rollup.config.js",
      test: "",
    },
    devDependencies: {
      rollup: "^2.70.2",
    },
    features: {
      "apimanage.export": {
        action: "exportFunc",
        label: "OpenAPI(.json)",
        description: "Convert api data into json of openapi format",
        icon: "",
        filename: "openapi.json",
      },
    },
  });

module.exports = {
  genPackageJSON,
};
