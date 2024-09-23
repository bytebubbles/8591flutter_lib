import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-build',
  base: '/8591flutter_lib_docs/',
  publicPath: '/8591flutter_lib_docs/',
  themeConfig: {
    name: '8591_flutter',
    hd: {
      rules: [
        { maxWidth: 375, mode: 'vw', options: [100, 750] },
        { minWidth: 376, maxWidth: 750, mode: 'vw', options: [100, 1500] },
      ],
    },
  },
});
