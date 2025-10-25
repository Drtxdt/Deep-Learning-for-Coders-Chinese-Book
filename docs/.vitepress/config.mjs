import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "小学生都可以看懂的深度学习教程",
  description: "fastai与PyTorch深度学习实践指南的非官方中文翻译",
  base: '/Deep-Learning-for-Coders-Chinese-Book/',
  lastUpdated: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '关于', link: '/about' }
    ],

    sidebar: [
      {
        text: '前言',
        items: [
          { text: '前言', link: '/pre' },
        ]
      },

      {
        text: '第一部分：实践中的深度学习',
        items: [
          { text: '1. 你的深度学习旅程', link: '/p1c1' },
          { text: '2. 从模型到生产', link: '/p1c2' },
          { text: '3. 数据伦理', link: '/p1c3' },
        ]
      },

      {
        text: '第二部分：理解fastai的应用',
        items: [
          { text: '4. 幕后揭秘：训练数字分类器', link: '/p2c4' },
          { text: '5. 图像分类', link: '/p2c5' },
          { text: '6. 其他计算机视觉问题', link: '/p2c6' },
        ]
      },
    ],

    outline: ['deep'],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Drtxdt/Deep-Learning-for-Coders-Chinese-Book' }
    ],


    footer: {
      message: '本翻译采用 MIT 许可证',
      copyright: '<a href="https://opensource.org/licenses/MIT">MIT License</a>'
    },

    editLink:{
      pattern: 'https://github.com/Drtxdt/Deep-Learning-for-Coders-Chinese-Book/edit/main/docs/:path',
      text: '有问题？在 GitHub 上编辑此页！'
    },

    search:{
      provider: 'local',
    },

    returnToTopLabel: '返回顶部',

    
    
  }
})
