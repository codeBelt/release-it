/**
 *  Configure Metro to work with a monorepo
 *
 * For more information on how to configure Metro for a monorepo, see the following Expo documentation:
 * @see https://docs.expo.dev/guides/monorepos/
 */

const path = require('path');
const {getDefaultConfig} = require('expo/metro-config');

// Find the project and workspace directories
const workspaceRoot = path.resolve(__dirname, '../..');
const projectRoot = __dirname;

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(projectRoot);

// 1. Watch all files within the monorepo
config.watchFolders = [workspaceRoot];

// 2. Let Metro know where to resolve packages and in what order
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];

// Enable package json exports
config.resolver.unstable_enablePackageExports = true;

// Enable transformer.unstable_allowRequireContext for storybook
config.transformer.unstable_allowRequireContext = true;
config.resolver.sourceExts.push('mjs');

module.exports = config;
