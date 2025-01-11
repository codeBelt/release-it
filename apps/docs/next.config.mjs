import {withExpo} from '@expo/next-adapter';
import nextra from 'nextra';

const expoConfig = withExpo({
  transpilePackages: [
    'react-native',
    'expo',
    // Add more React Native/Expo packages here...
  ],
  experimental: {
    forceSwcTransforms: true,
  },
});

const nextraConfig = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

/** @type {import('next').NextConfig} */
const nextConfig = nextraConfig(expoConfig);

export default nextConfig;
