import { Post } from "../database/models/post";
import { PostsController } from "./PostsController";

describe("PostsController", () => {
  it("#index", async () => {
    const spy = jest.spyOn(Post, "findAll").mockImplementation(() => {
      return Promise.resolve();
    });

    new PostsController().index();
    expect(spy).toBeCalled();
  });
});
