import {withExpo} from '@expo/next-adapter';

/** @type {import('next').NextConfig} */
const nextConfig = withExpo({
  transpilePackages: [
    'react-native',
    'expo',
    // Add more React Native/Expo packages here...
  ],
  experimental: {
    forceSwcTransforms: true,
  },
});

export default nextConfig;
