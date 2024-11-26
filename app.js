const express = require('express');
const bodyParser = require('body-parser');

 const app = express();

 // middleware for parsing request body
 app.use(bodyParser.urlencoded({ extended: true }));

 // serve static files
 app.use(express.static('public'));

 // in-memory database for blog posts
 const blogPosts = [
    { id: 1, title: "First Post", content: "This is the content of the first post." },
    { id: 2, title: "Second Post", content: "This is the content of the second post." },
    { id: 3, title: "Third Post", content: "This is the content of the third post." }
 ];

 // api to fetch all posts
 app.get('/api/posts', (req, res) => {
    res.json(blogPosts);
 });

 // api to fetch a single post
 app.get('/api/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id, 10);
    const post = blogPosts.find(post => post.id === postId);

    if(post) {
       res.json(post);
    } else {
       res.status(404).send('Post not found');
    }
 });

 // start the server
 const PORT = 3000 || process.env.PORT;
 app.listen(PORT, () => {
    console.log('Server is running on http://localhost:3000');
 });