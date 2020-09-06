const remarkcodeimport = require('remark-code-import')

module.exports = {
  title: 'React Reserver',
  tagline: 'for all your time based development needs',
  url: 'https://shmuelpro.github.io',
  baseUrl: '/react-reserver/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'shmuelpro', // Usually your GitHub org/user name.
  projectName: 'react-reserver', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'React Reserver',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png'
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left'
        },

        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://www.npmjs.com/package/react-reserver',
          label: 'npm',
          position: 'right'
        },
        {
          href: 'https://github.com/shmuelpro/react-reserver',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} shmuelpro. Built with Docusaurus.`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          remarkPlugins: [remarkcodeimport],
          homePageId: 'gettingstarted',
          sidebarPath: require.resolve('./sidebars.js')
        },
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
