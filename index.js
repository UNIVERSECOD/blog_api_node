const express = require('express');
const {PORT} = require("./constants");
const {posts} = require("./data/posts")
const {v4: uuidv4} = require ('uuid')

const app = express();

app.use(express.json()); // To parse JSON request bodies

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/posts', (req, res) => {
    res.json(posts);
});



app.post('/posts', (req, res) => {
    const { title, content, tags } = req.body;
    const post ={
        id: uuid.v4(),
        title,
        content,
        tags,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    } 
    if (!title ||!content ||!tags) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    posts.push(post);
    res.status(201).json({
        success: true,
        data: post,
    });
})


app.delete('/posts:id', (req, res) => {
    const { id } = req.params;
    const postIndex = posts.findIndex(post => post.id === id);
    if (postIndex === -1) {
        return res.status(404).json({ error: 'Post not found' });
    }
   const post = posts.splice(postIndex, 1)[0];
    res.json({
        success: true,
        data: post,
    });
})


app.put('/posts/:id', (req, res) => {
    const { id } = req.params;
    const { title, content, tags } = req.body;
    const postIndex = posts.findIndex(post => post.id === id);

    if (postIndex === -1) {
        return res.status(404).json({ error: 'Post not found' });
    }

    if (!title ||!content ||!tags) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    post.title = title;
    post.content = content;
    post.tags = tags;
    post.updatedAt = new Date().toISOString();


    const updatedPost = {
        id,
        title,
        content,
        tags,
        createdAt: posts[postIndex].createdAt,
        updatedAt: new Date().toISOString(),
    }
  
    posts[postIndex] = updatedPost;
    res.json({
        success: true,
        data: updatedPost,
    });
})



app.listen( (PORT) => {
    console.log(`Server is running on port ${PORT}`);
});