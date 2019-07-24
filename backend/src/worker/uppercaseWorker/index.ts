import { Post } from '../../database/models/post';
import './function.json';

(async (context, myTimer) => {
  console.log('Start uppercaseWorker');
  const posts = await Post.findAll();
  posts.map(async (post: Post) => {
    await post.update({ title: post.title && post.title.toUpperCase() });
  });
  console.log('Finish uppercaseWorker');
})();
