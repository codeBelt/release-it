import {DocsThemeConfig} from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span>Turborepo</span>,
  project: {
    link: 'https://github.com/du5rte/turborepo',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/du5rte/turborepo',
  footer: {
    text: (
      <span>
        Powered by{' '}
        <a href="https://nextra.site">
          <b>Nextra</b>
        </a>{' '}
        - Next.js Static Site Generator
      </span>
    ),
  },
};

export default config;
// https://nextra.site/docs
