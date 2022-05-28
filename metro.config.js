const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.transformer.minifierConfig.compress.drop_console = true;

defaultConfig.resolver.assetExts.push('cjs');

module.exports = defaultConfig;