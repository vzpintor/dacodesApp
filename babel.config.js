module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@screens': './src/app/screens',
          '@shared': './src/app/shared',
          '@images': './src/assets/images',
          '@utils': './src/app/utils',
          '@stores': './src/app/stores',
          '@navigation': './src/app/navigation',
          '@config': './src/app/config',
        },
      },
    ],
  ],
};
