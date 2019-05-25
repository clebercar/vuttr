module.exports = {
  verbose: true,
  setupFilesAfterEnv: [
    '<rootDir>/__tests__/setup.js'
  ],
  bail: true,
  clearMocks: true,
  collectCoverage: true,
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/__tests__/'],
  collectCoverageFrom: ['**/*.{js}'],
  coverageDirectory: '__tests__/coverage',
  testEnvironment: 'node',
  testMatch: [
    '**/__tests__/**/*.test.js?(x)'
  ]
}
