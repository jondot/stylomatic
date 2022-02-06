module.exports = {
  preset: 'ts-jest',
  verbose: true,
  testEnvironment: 'node',
  transform: {
    //'^.+\\.(t|j)sx?$': 'esbuild-jest' // problem w/circular deps issuing 'undefined' for imports
    //"^.+\\.(t|j)sx?$": "@swc/jest"
  }
}