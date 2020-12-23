/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'Electra Protocol Education',
  tagline: 'To learn, educate, and grow',
  url: 'https://learn.electraprotocol.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'electraprotocol', // Usually your GitHub org/user name.
  projectName: 'learnelectra', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Electra Protocol',
      logo: {
        alt: 'My Site Logo',
        src: 'img/electravec.svg',
      },
      items: [
        {to: 'docs/intro_guide', label: 'Docs', activeBasePath: 'docs', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: 'docs/intro_guide',
            },
          ],
        },
        {
	  title: 'Electra Protocol Community',
	  items: [
	    {
	      label: 'Discord',
	      href: 'https://discordapp.com/invite/B8F7Jdv',
	    },
	    {
	      label: 'Main Website',
	      href: 'https://electraprotocol.com',
	    },
          ],
        }, 
	{
          title: 'Development',
          items: [
            {
              label: 'Docusaurus Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
      ],
      logo: {
        alt: 'Electra Protocol Logo',
        src: 'https://raw.githubusercontent.com/Electra-project/Electra-Media-Kit/master/Electra%20Logo/White%20logo/Electra%20White%20logo%20small.png',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Electra Protocol. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
