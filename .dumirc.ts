import { defineConfig } from 'dumi';

export default defineConfig({
  favicons: [
    'https://img.alicdn.com/imgextra/i2/O1CN01ZAedQu1xiyboFhMKk_!!6000000006478-55-tps-200-200.svg',
  ],
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'xsahxl',
    logo: 'https://img.alicdn.com/imgextra/i2/O1CN01ZAedQu1xiyboFhMKk_!!6000000006478-55-tps-200-200.svg',
    socialLinks: {
      github: 'https://github.com/xsahxl/ui',
    },
    footer: `Copyright © ${new Date().getFullYear()} | Powered by xsahxl`,
    nav: [
      {
        title: '博客',
        link: 'https://xsahxl.github.io/blog',
      },
    ],
    showLineNum: true,
  },
});
