import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-build',
  base: '/8591flutter_lib/',
  publicPath: '/8591flutter_lib/',
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
