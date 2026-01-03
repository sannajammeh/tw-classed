import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'TW-Classed',
      url: '/',
    },
    links: [
      { text: 'Docs', url: '/docs' },
      { text: 'Core', url: '/core' },
      { text: 'GitHub', url: 'https://github.com/sannajammeh/tw-classed', external: true },
    ],
  };
}
