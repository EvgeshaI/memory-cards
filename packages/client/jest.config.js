const { defaults } = require('jest-config');
const dotenv = require('dotenv')

dotenv.config({ path: '../../.env' });

module.exports = {
  ...defaults,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
  globals: {
    __SERVER_PORT__: JSON.stringify(process.env.SERVER_PORT),
    __SERVER_API_URL__: JSON.stringify(process.env.SERVER_API_URL),
    __YANDEX_API_URL__: JSON.stringify(process.env.YANDEX_API_URL),
    __YANDEX_RESOURCES_URL__: JSON.stringify(process.env.YANDEX_RESOURCES_URL),
  },
  moduleNameMapper: {
    '\\.s?css$': 'babel-jest',
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.svg$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  transform: {
    '\\.svg$': 'jest-transformer-svg',
  },
  setupFiles: ['jest-canvas-mock'],
};
