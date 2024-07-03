import nextra from 'nextra'
import { withExpo } from '@expo/next-adapter'

const expoConfig = withExpo({
  transpilePackages: [
    'react-native',
    'expo',
    // Add more React Native/Expo packages here...
  ],
  experimental: {
    forceSwcTransforms: true,
  },
})

const nextraConfig = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

/** @type {import('next').NextConfig} */
const nextConfig = nextraConfig(expoConfig)

export default nextConfig
