import app from "../src/app";
import * as request from "supertest";

describe("GET /posts", () => {
  it("respond with json", async () => {
    const response = await request(app).get("/posts");
    expect(response.status).toEqual(200);
  });
});
