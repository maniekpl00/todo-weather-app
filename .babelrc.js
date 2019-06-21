module.exports = {
  presets: ['react-app'],
  plugins: [
    [
      'styled-components',
      {
        displayName: process.env.NODE_ENV === 'development' ? true : false,
        fileName: false,
      },
    ],
    'named-asset-import',
  ],
};
