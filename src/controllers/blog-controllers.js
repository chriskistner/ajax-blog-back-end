const model = require('../model/blog-models');

function allBlogs (req, res, next) {
  const result = model.allBlogs();

  if (!result)
    return next({status: 404, message: "Sorry, your Blog is Empty."})

  res.status(200).send(result);
  };

  function getBlog (req, res, next) {
  const blogID = req.params.id;
  const result = model.getBlog(blogID);

  if (!result)
    return next({ status: 404, message: "Blog not Found" });

  res.status(200).send(result);
};

function newBlog (req, res, next) {
  const {title, content} = req.body;
  if (!title || title.length <= 0)
    return next({ status: 400, message: "A Name is Required for your Blog Post!" });
  if (content.length <=1) 
    return next({status: 400, message: "That's not must of a Post!"})

  let result = model.newBlog(title, content);
  res.status(201).send(result);
};

function deleteBlog (req, res, next) {
  let blogID = req.params.id;
  const result = model.deleteBlog(blogID);

  if (!result)
    return next({ status: 404, message: "Can't delete what doesn't exist" });

  res.status(200).send(result);
};

function updateBlog (req, res, next) {
  let blogID = req.params.id; 
  const {title, content} = req.body;
  if (!blogID)
    return next({ status: 400, message: "Hey I can't update what you don't give me!" });

  let result = model.updateBlog(blogID, title, content);

  res.status(201).send(result);
};


  module.exports = {
      allBlogs,
      getBlog,
      newBlog,
      deleteBlog,
      updateBlog
  };