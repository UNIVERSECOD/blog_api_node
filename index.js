const express = require('express');
const { v4: uuidv4 } = require('uuid');
const { PORT } = require('./constants');
const { posts } = require('./data');
const postsRouter = require('./routes/posts');
const usersRouter = require('./routes/users');

const app = express();

app.use(express.json()); //Requsteimin bodysinden gelen datani json formatindan parse edir

app.get('/', (req, res) => {
    res.send('Hello, You are in BLOP API!');
});

app.use("/users", usersRouter)  // davamina gelecek

app.use("/posts", postsRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
