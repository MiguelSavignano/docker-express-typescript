const app = require("../app");
const request = require("supertest");

describe("GET /users", () => {
  it("respond with json", async () => {
    const response = await request(app).get("/posts");
    expect(response.status).toEqual(200);
  });
});
