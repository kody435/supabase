module.exports = {
  presets: [
    [
      '@babel/env',
      {
        modules: false,
        loose: true,
        targets: {
          browsers: ['>2%'],
        },
      },
    ],
    '@babel/preset-react',
  ],
  plugins: ['add-react-displayname'],
}
