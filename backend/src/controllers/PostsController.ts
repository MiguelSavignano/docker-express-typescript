import {
  Path,
  GET,
  PathParam,
  PUT,
  POST,
  DELETE,
  FormParam
} from 'typescript-rest';
import { Post } from '../database/models/post';

@Path('/posts')
export class PostsController {
  @GET
  async index() {
    return Post.findAll();
  }

  @Path(':id')
  @GET
  async show(@PathParam('id') id: number) {
    return Post.findByPk(id);
  }

  @POST
  async create(
    @FormParam('title') title: string,
    @FormParam('content') content: string
  ) {
    return Post.create({ title, content });
  }

  @Path(':id')
  @PUT
  async updatte(
    @PathParam('id') id: string,
    @FormParam('title') title: string,
    @FormParam('content') content: string
  ) {
    return Post.update({ title, content }, { where: { id } });
  }

  @Path(':id')
  @DELETE
  async destroy(@PathParam('id') id: string) {
    return Post.destroy({ where: { id } });
  }
}
