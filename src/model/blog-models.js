const fs = require('fs');
const uuid = require('uuid/v4');
const path = require('path');

function allBlogs () {
    const blogs = fs.readFileSync(path.join(__dirname,'../../data/blog.json'),'utf-8');
    const blogLibrary= JSON.parse(blogs);

    return blogLibrary;
};

function getBlog (id) {
    const blogs = fs.readFileSync(path.join(__dirname,'../../data/blog.json'),'utf-8');
    const blogLibrary = JSON.parse(blogs);

    let result = blogLibrary.data.find(blog => blog.id === id);

    return result;
}

function newBlog (title, content) {
    let newBlog = { id: uuid().slice(0,8), title, date: currentDate(), content };
    const blogs = fs.readFileSync(path.join(__dirname,'../../data/blog.json'),'utf-8');
    const blogLibrary = JSON.parse(blogs);

    blogLibrary.data.push(newBlog);
    fs.writeFileSync(path.join(__dirname,'../../data/blog.json'), JSON.stringify(blogLibrary, null, 4), 'utf-8');

    return newBlog;
  };

  function deleteBlog (id) {
    const blogs = fs.readFileSync(path.join(__dirname,'../../data/blog.json'),'utf-8');
    const blogLibrary = JSON.parse(blogs);

    const deletedBlog = blogLibrary.data.find(blog => blog.id === id)
    const index = blogLibrary.data.findIndex(blog => blog.id === id)

    blogLibrary.data.splice(index,1);
    fs.writeFileSync(path.join(__dirname,'../../data/blog.json'), JSON.stringify(blogLibrary, null, 4), 'utf-8');

    return deletedBlog;
  }

  function updateBlog (id, title, content) {
    const updatedBlog = {id, title, content};
    const blogs = fs.readFileSync(path.join(__dirname,'../../data/blog.json'),'utf-8');
    const blogLibrary = JSON.parse(blogs);

    let blog = blogLibrary.data.find(blog => blog.id === updatedBlog.id);
    blog.title = updatedBlog.title;
    blog.date = currentDate();
    blog.content = updatedBlog.content;

    fs.writeFileSync(path.join(__dirname,'../../data/blog.json'), JSON.stringify(blogLibrary, null, 4), 'utf-8');
    
    return blog;
  }

  function currentDate() {
      let today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth()+1; //January is 0!
      let yyyy = today.getFullYear();
      let hr = today.getHours();
      let min = today.getMinutes();

      if (dd < 10)
          dd = '0' + dd;
      if (mm < 10)
          mm = '0' + mm;
      if (min < 10)
          min = '0' + min;

      today = `${mm}/${dd}/${yyyy}, ${hr}:${min}`;
      return today
  }

module.exports = {
    allBlogs,
    getBlog,
    deleteBlog,
    newBlog,
    updateBlog,
}