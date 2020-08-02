const remarkcodeimport = require('remark-code-import')

module.exports = {
  title: 'React Reserver',
  tagline: 'Docs still under development',
  url: 'https://shmuelpro.github.io',
  baseUrl: '/react-reserver/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: '', // Usually your GitHub org/user name.
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
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'gettingstarted',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/shmuelpro/react-reserver/tree/master/example/'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
