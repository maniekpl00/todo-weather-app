module.exports = {
  presets: ['react-app'],
  plugins: [
    [
      'styled-components',
      {
        displayName: process.env.NODE_ENV === 'production' ? false : true,
        fileName: false,
      },
    ],
    'named-asset-import',
  ],
};
