const genPackageJSON = (name) =>
  JSON.stringify({
    name,
    version: "1.0.0",
    description: "The import extension of eoapi",
    main: "dist/index.js",
    logo: "https://s3.bmp.ovh/imgs/2022/05/18/d8d200e3dc050831.png",
    scripts: {
      build: "rollup -c rollup.config.js",
      "build:watch": "rollup -w -c rollup.config.js",
    },
    devDependencies: {
      rollup: "^2.70.2",
    },
    features: {
      importAPI: {
        action: "importFunc",
        label: "Data(.json)",
        description: "",
        icon: "",
        filename: "data.json",
      },
    },
  });

module.exports = {
  genPackageJSON,
};
