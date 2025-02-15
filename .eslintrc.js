// prettier-ignore
module.exports = {
  plugins: ['react', 'import'],
  extends: ['uber-jsx', 'uber-es2015', 'prettier', 'prettier/react', 'plugin:import/errors'],
  overrides: [{
    files: ['*.spec.js', 'webpack.config.js', '**/bundle/*.js'],
    rules: {
      'import/no-extraneous-dependencies': 0
    }
  }],
  settings: {
    'import/core-modules': [
      '@luma.gl/core',
      '@luma.gl/constants',
      'math.gl',
      '@math.gl/web-mercator'
    ],
    react: {
      version: 'detect'
    }
  },
  rules: {
    'guard-for-in': 0,
    'no-inline-comments': 0,
    // eslint treats optional chaining as unused expressions
    'no-unused-expressions': 0,
    camelcase: 0,
    'react/forbid-prop-types': 0,
    'react/no-deprecated': 0,
    'import/no-unresolved': ['error', {ignore: ['test']}],
    'import/no-extraneous-dependencies': ['error', {devDependencies: false, peerDependencies: true}],
    'accessor-pairs': 0
  },
  parserOptions: {
    ecmaVersion: 2020
  }
};
