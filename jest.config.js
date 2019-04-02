const config = {
    collectCoverage: true,
    collectCoverageFrom: [
        './src/**/*.js'
    ],
    coverageReporters: ['json', 'lcov', 'text', 'text-summary', 'clover'],
    coverageThreshold: {
        global: {
            statements: 1,
            branches: 1,
            functions: 1,
            lines: 1
        }
    },
    setupFilesAfterEnv: [
        `${__dirname}/scripts/jest/test-framework-setup.js`
    ],
    moduleNameMapper: {
        '\\.(styl)$': `${__dirname}/scripts/jest/dumb-mock.js`
    },
    transform: {
        '^.+\\.js': `${__dirname}/node_modules/babel-jest`
    }
};

module.exports = config;
