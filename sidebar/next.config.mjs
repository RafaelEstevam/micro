// next.config.js
// either from default
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import NextFederationPlugin from '@module-federation/nextjs-mf';

export function webpack(config, options) {
  const { isServer } = options;
  config.plugins.push(
    new NextFederationPlugin({
      name: 'sidebar',
      remotes: {
        blog: `blog@http://localhost:3001/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
      },
      filename: 'static/chunks/remoteEntry.js',
      exposes: {
        './widget': './src/components/Widget.tsx',
        // './checkout': './pages/checkout',
      },
      shared: {
      },
    })
  );

  config.plugins.push(
    new MiniCssExtractPlugin({
      filename: 'static/chunks/remoteEntry.css',
      linkType: "text/css",
    })
  );

  return config;
}

export const module = {
  rules: [
    {
      test: /\.css$/i,
      use: [MiniCssExtractPlugin.loader, "css-loader"],
    },
  ],
}

// import NextFederationPlugin from '@module-federation/nextjs-mf';
// import MiniCssExtractPlugin from "mini-css-extract-plugin";

// export const plugins = [
//   new NextFederationPlugin({
//     name: 'sidebar',
//     remotes: {
//       blog: `blog@http://localhost:3001/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
//     },
//     filename: 'static/chunks/remoteEntry.js',
//     exposes: {
//       './widget': './src/components/Widget.tsx',
//       // './checkout': './pages/checkout',
//     },
//     shared: {
//     },
//   }),
//   new MiniCssExtractPlugin()
// ];

// export const module = {
//   rules: [
//     {
//       test: /\.css$/i,
//       use: [loader, "css-loader"],
//     },
//   ],
// };