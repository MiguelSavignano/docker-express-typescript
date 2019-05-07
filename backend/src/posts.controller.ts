const db = require("../models");

import { Path, GET, PathParam, PUT, POST, FormParam } from "typescript-rest";

@Path("/posts")
export class PostsController {
  @GET
  async index() {
    return db.post.findAll();
  }

  @Path(":id")
  @GET
  async show(@PathParam("id") id: number) {
    return db.post.findByPk(id);
  }

  @POST
  async create(
    @FormParam("title") title: string,
    @FormParam("content") content: string
  ) {
    return db.post.create({ title, content });
  }

  @Path(":id")
  @PUT
  async updatte(
    @PathParam("id") id: string,
    @FormParam("title") title: string,
    @FormParam("content") content: string
  ) {
    return db.post.update({ title, content }, { where: { id } });
  }
}
