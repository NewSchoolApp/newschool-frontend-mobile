module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.ios.js',
          '.android.js',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          "^@ns/(.+)": "./app/\\1",
          "^@root/(.+)": "./\\1"
        },
      },
    ],
  ]
};
