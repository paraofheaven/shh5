 
const { join, resolve } = require('path');
const devPort = 3001;
const projectVirtualPath = 'home';
module.exports = {
  scaffoldType: 'react',
  projectVirtualPath,
  baseOption: {
    px2rem: true,
    cdnPath: {
      inte: [
        '//xiangxinjs.com/'
      ],
      rc: [
        '//xiangxinjs.com/'
      ],
      prod: [
        '//xiangxinjs.com/'
      ]
    },
    projectCwd: join(__dirname, 'src'),
    outputPath: resolve(__dirname, 'public'),
    htmlTemplate: join(__dirname, 'templates/index{0}.html'),
  },
  buildOption: {
    enableBundleHashName: true,
  },
  serveOption: {
    devPort,
    mockBase: join(__dirname, 'mocks'),
    mockStatic: join(__dirname, 'mocks/statics'),
    // mockMethod(req:Request, foundRoute:string, 'rest'|'func')
    mockMethod: () => null,
    mockRouteDefs: {
      '/keleweb': [
        'common'
      ]
    },
    contentBase: join(__dirname, 'public/'),
    serveTemplate: join(__dirname, 'templates/serve.ejs'),
    moduleTemplate: join(__dirname, 'templates/module.ejs'),
    outputPublicPath: `http://dev.para.org:${devPort}/public/`,
  },
  babel: {
    presets: [
      '@babel/preset-react'
    ],
    plugins: [
      '@babel/plugin-syntax-dynamic-import'
    ]
  },
  entries: {
    [`${projectVirtualPath}/keleweb`]: { entry: ['./src/keleweb/index'], options: { mockRouteDef: '/keleweb' } }
  },
  modularImport: [{
    'libraryName': 'antd',
    'libraryDirectory': 'es',
  }],
  webpackAlias: {},
  webpackPerformance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  webpackProxy: {},
  webpackExternal: {},
  webpackModule: {},
  webpackPlugins: [],
};
