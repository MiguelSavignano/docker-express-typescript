const db = require("../models");

const PostsController = {
  index: (req, res) => db.post.findAll().then(result => res.json(result)),

  show: (req, res) =>
    db.post.findById(req.params.id).then(result => res.json(result)),

  create: (req, res) =>
    db.post
      .create({
        title: req.body.title,
        content: req.body.content
      })
      .then(result => res.json(result)),

  update: (req, res) =>
    db.post
      .update(
        {
          title: req.body.title,
          content: req.body.content
        },
        {
          where: {
            id: req.params.id
          }
        }
      )
      .then(result => res.json(result)),

  destroy: (req, res) =>
    db.post
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(result => res.json(result))
};

module.exports = PostsController;
