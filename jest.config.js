module.exports = {
  verbose: true,
  rootDir: 'src',
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js'
  ],
  bail: true,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/**/*.js'],
  coverageDirectory: '../coverage',
  coverageReporters: [
    'text-summary',
    'lcov'
  ],
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/**/*.test.js'
  ]
}
