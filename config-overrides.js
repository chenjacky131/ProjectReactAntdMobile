const { override, adjustStyleLoaders, fixBabelImports } = require("customize-cra");
module.exports = override(
    // ...其他配置...
    adjustStyleLoaders(rule => {
        if (rule.test.toString().includes("scss")) {
            rule.use.push({
                loader: require.resolve("sass-resources-loader"),
                options: {
                    resources: "./src/assets/scss/_basic.sass" //这里是你自己放公共scss变量的路径
                }
            });
        }
    }),
    fixBabelImports('import', {      
      libraryName: 'antd-mobile',      
      style: 'css',      
    }),
    // ...其他配置...
);