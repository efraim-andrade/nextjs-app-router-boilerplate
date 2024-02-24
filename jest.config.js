module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?'],

  testEnvironments: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],

  modulePaths: ['<rootDir>/src/'],
  setupFilesAfterEnv: ['<rootDir>/.jest/jest.setup.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  }
}
