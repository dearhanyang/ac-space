import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'AC Space',
  tagline: '记录日常的学习、思考、分享',
  favicon: '/img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://dearhanyang.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/ac-space/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dearhanyang', // Usually your GitHub org/user name.
  projectName: 'ac-space', // Usually your repo name.

  onBrokenLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  // 插件配置
  plugins: [
    // 缓存控制插件
    './src/plugins/cache-control-plugin.js',
  ],

  // SEO head tags
  headTags: [
    // Preconnect to important domains
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://github.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    // Structured data
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'Organization',
        name: 'AC Space',
        url: 'https://dearhanyang.github.io/ac-space/',
        logo: 'https://dearhanyang.github.io/ac-space/img/logo.jpg',
        description: '记录日常的学习、思考、分享，专注于算法竞赛和编程技术',
      }),
    },
  ],

  // 构建配置
  trailingSlash: false, // 确保 URL 不包含尾部斜杠，有助于缓存控制

  themeConfig: {
    // Replace with your project's social card
    image: 'img/ac-social-card.jpg',
    // SEO metadata
    metadata: [
      {
        name: 'keywords',
        content: '算法,编程,竞赛,C++,NOIP,CSP,AtCoder,学习笔记,题解,技术博客',
      },
      {
        name: 'description',
        content:
          'AC Space - 记录日常的学习、思考、分享，专注于算法竞赛和编程技术',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'og:title', content: 'AC Space' },
      {
        name: 'og:description',
        content: '记录日常的学习、思考、分享，专注于算法竞赛和编程技术',
      },
      { name: 'og:image', content: 'img/ac-social-card.jpg' },
    ],
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'AC Space',
      logo: {
        alt: 'AC Space Logo',
        src: '/img/logo.jpg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'editorialSidebar',
          position: 'right',
          label: '题解',
        },
        {
          type: 'docSidebar',
          sidebarId: 'notesSidebar',
          position: 'right',
          label: '笔记',
        },
        { to: '/blog', label: '动态', position: 'right' },
        { to: '/me', label: '我', position: 'right' },
        {
          href: 'https://github.com/dearhanyang/ac-space',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '题解',
              to: '/docs/editorial',
            },
            {
              label: '笔记',
              to: '/docs/notes',
            },
          ],
        },
        {
          title: 'OI链接',
          items: [
            {
              label: 'NOI报名',
              href: 'https://cspsjtest.noi.cn/',
            },
            {
              label: '四川省计算机学会',
              href: 'https://www.spcf.cn//',
            },
            {
              label: 'GESP',
              href: 'https://gesp.spcf.cn/',
            },
            {
              label: 'OIerDb',
              href: 'https://oier.baoshuo.dev/contests',
            },
          ],
        },
        {
          title: '学习&比赛',
          items: [
            {
              label: '小栈',
              href: 'https://msoj.stackedu.com/',
            },
            {
              label: '洛谷',
              href: 'https://www.luogu.com.cn/',
            },
            {
              label: 'Atcoder',
              href: 'https://atcoder.jp/',
            },
            {
              label: 'Vjudge',
              href: 'http://vjudge.net/',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '动态',
              to: '/blog',
            },
            {
              label: '我',
              to: '/me',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/dearhanyang/ac-space',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AC Space, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
