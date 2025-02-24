const presets = ['module:metro-react-native-babel-preset'];
const plugins = [
  [
    'module-resolver',

    {
      root: ['./src'],
      extensions: ['.js', '.json'],
      alias: {
        'assets/*': '/assets/*',
        'components/*': '/components/*',
        'config/*': '/config/*',
        'constants/*': '/constants/*',
        'containers/*': '/containers/*',
        'navigators/*': '/navigators/*',
        'services/*': '/services/*',
        'store/*': '/store/*',
        'utils/*': '/utils/*',
        'styles/*': '/styles/*',
        'data/*': '/data/*',
        'features/*': '/features/*',
        'images/*': '/images/*',
      },
    },
  ],
  'react-native-reanimated/plugin',
];

// plugins.push([

// ])

module.exports = {
  presets,
  plugins,
};
