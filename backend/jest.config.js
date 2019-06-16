module.exports = {
  testRegex: ".spec.ts$",
  preset: "ts-jest",
  testEnvironment: "node",
  reporters: ["default", "jest-junit"],
  coverageReporters: [
    "text",
    "cobertura"
  ]
};
