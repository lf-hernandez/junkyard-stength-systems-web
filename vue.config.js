const path = require('path');

function addStyleResource(rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, 'client/src/styles/style.scss')
            ]
        });
}

module.exports = {
    assetsDir: 'client/src/assets',
    indexPath: 'client/public/index.html',

    pages: {
        index: {
            entry: 'client/src/main.ts'
        }
    },

    chainWebpack: config => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
        types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)));
    },

    publicPath: '/client',

    pwa: {
      name: 'Junkyard Strength Systems'
    }
};
