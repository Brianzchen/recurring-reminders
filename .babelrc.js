const config = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: { browsers: ['last 2 versions', 'safari >= 7'] },
      },
    ],
    '@babel/preset-react',
    '@babel/preset-flow',
  ],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    [
      'transform-imports',
      {
        lodash: {
          transform: 'lodash/${member}',
          preventFullImport: true,
        },
        'react-router': {
          transform: 'react-router/${member}',
          preventFullImport: true,
        },
      },
    ],
  ],
};

if (process.env.NODE_ENV !== 'test') {
  config.presets[0][1].modules = false;
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push('transform-react-remove-prop-types');
}

module.exports = config;
