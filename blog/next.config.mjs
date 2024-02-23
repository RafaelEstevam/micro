// next.config.js

import NextFederationPlugin from '@module-federation/nextjs-mf';

export function webpack(config, options) {
  const { isServer } = options;
  config.plugins.push(
    new NextFederationPlugin({
      name: 'blog',
      filename: 'static/chunks/remoteEntry.js',
      remotes: {
        sidebar: `sidebar@http://localhost:3003/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
      },
      exposes: {
        './home': './src/components/Home.tsx',
        // './checkout': './pages/checkout',
      },
      shared: {
        // whatever else
      },
    })
  );

  return config;
}