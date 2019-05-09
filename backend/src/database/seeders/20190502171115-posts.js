"use strict";
const faker = require("faker");
const times = require("lodash.times");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "post",
      times(10, () => ({
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
        createdAt: new Date(),
        updatedAt: new Date()
      }))
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("post", null, {});
  }
};
