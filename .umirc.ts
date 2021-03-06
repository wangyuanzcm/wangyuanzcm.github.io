// import { defineConfig } from 'dumi';

// export default defineConfig({
//   title: 'hiker-blog',
//   favicon: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
//   logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
//   outputPath: 'docs-dist',
//   mode: 'site',
//   publicPath:  './',
//   resolve: {
//     includes: ['docs', 'src'],
//   },
//   // more config: https://d.umijs.org/config
// });

export default {
  title: 'hiker-blog',
  favicon: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  resolve: {
    includes: ['docs', 'src'],
  },
  plugins: ['./plugins/exercise/index.ts'],
  scripts: [
    {
      src: 'https://utteranc.es/client.js',
      repo: "wangyuanzcm/wangyuanzcm.github.io",
      "issue-term": "pathname",
      theme: "github-light",
      crossorigin: "anonymous",
      async: true
    },
  ],
  // more config: https://d.umijs.org/config
}
