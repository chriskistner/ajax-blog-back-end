const fs = require('fs');
const uuid = require('uuid/v4');
const path = require('path');

function allBlogs () {
    const blogs = fs.readFileSync(path.join(__dirname,'../../data/blog.json'),'utf-8');
    const blogLibrary= JSON.parse(blogs);

    return blogLibrary;
};

function getblog (id) {
    const blogs = fs.readFileSync(path.join(__dirname,'../../data/blog.json'),'utf-8');
    const blogLibrary = JSON.parse(blogs);

    let result = blogLibrary.data.find(blog => blog.id === id);

    return result;
}

function newBlog (title, date, content) {
    let newBlog = { id: uuid().slice(0,8), title, date, content };
    const blogs = fs.readFileSync(path.join(__dirname,'../../data/blogs.json'),'utf-8');
    const blogLibrary = JSON.parse(blogs);

    blogLibrary.data.push(newBlog);
    fs.writeFileSync(path.join(__dirname,'../../data/blogs.json'), JSON.stringify(blogLibrary, null, 4), 'utf-8');

    return newGame;
  };

  function deleteBlog (id) {
    const blogs = fs.readFileSync(path.join(__dirname,'../../data/blogs.json'),'utf-8');
    const blogLibrary = JSON.parse(blogs);

    const deletedBlog = blogLibrary.data.find(blog => blog.id === id)
    const index = blogLibrary.data.findIndex(blog => blog.id === id)

    blogLibrary.data.splice(index,1);
    fs.writeFileSync(path.join(__dirname,'../../data/blog.json'), JSON.stringify(blogLibrary, null, 4), 'utf-8');

    return deletedBlog;
  }

  function updateBlog (id, title, date, content) {
    const updatedBlog = {id, title, date, content};
    const blogs = fs.readFileSync(path.join(__dirname,'../../data/blogs.json'),'utf-8');
    const blogLibrary = JSON.parse(blogs);

    let blog = blogLibrary.data.find(blog => blog.id === updatedBlog.id);
    blog.name = updatedBlog.name;
    blog.system = updatedBlog.system;
    blog.publisher = updatedBlog.publisher;
    blog.developer = updatedBlog.developer;

    fs.writeFileSync(path.join(__dirname,'../../data/blogs.json'), JSON.stringify(blogLibrary, null, 4), 'utf-8');
    
    return blog;
  }

module.exports = {
    allBlogs,
    getBlog,
    deleteBlog,
    newBlog,
    updateBlog,
}