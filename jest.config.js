module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '@ns/(.*)': '<rootDir>/app/$1',
    '@root/(.*)': '<rootDir>/$1',
  },
  testEnvironment: 'jsdom',
};
