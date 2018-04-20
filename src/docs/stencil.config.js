const sass = require('@stencil/sass');

exports.config = {
  namespace: 'DocsSite',
  srcDir: 'site/',
  plugins: [
    sass()
  ],
  outputTargets: [
    {
      type: 'www',
      dir: '../../docs/',
      serviceWorker: false
    }
  ],
  globalStyle: 'site/global/style.css',
  copy: [
    { src: '../../../dist/css/ionicons.min.css', dest: './css/ionicons.min.css' },
    { src: '../../../dist/fonts/', dest: './fonts/' },
    { src: '../../../dist/svg/', dest: './svg/' },
    { src: '../../../dist/ionicons.designerpack.zip', dest: './svg/ionicons.designerpack.zip' },
    { src: '../../../dist/ionicons/', dest: './ionicons/' },
    { src: '../../../dist/ionicons.js', dest: './ionicons.js' },
    { src: '../../../dist/cheatsheet.html', dest: './cheatsheet.html' },
    { src: '../../data.json', dest: './data.json' }
  ]
};
