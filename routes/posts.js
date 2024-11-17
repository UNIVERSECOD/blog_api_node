const { Router } = require('express')
const { v4: uuidv4 } = require('uuid');
const { posts } = require('../data');
const router = Router()

// Search paginationdan əvvəl eləsəm bütün dataların içində search edəcək,
//sonra eləsəm ancaq pagination olunmuşların içində. Search olunmuş datalar pagination olmalıdır.

router.get('/', (req, res) => {
    // const {} = req.query; //take,skip gelir type string, olmasa ichi boshdu

    const take = +(req.query.take ?? 8) //numbere kechirmeliyik
    const skip = +(req.query.skip ?? 0)
    const search = (req.query.search ?? "").trim()
    const includeCreator = req.query.includeCreator === "true";
    const sort = req.query.sort; // SORT Paginationdan evvel butun datani sort edib pagination yaratmaliyiq,
    // searchden sonra 1000 data sort edirsen searchdan sonra 5 data sort etmek varken niya 1000 datani edek 


    let filteredPosts = posts

    if (search) {
        filteredPosts = filteredPosts.filter((post) =>
            post.title.toLowerCase().includes(search.toLowerCase()) ||
            post.content.toLowerCase().includes(search.toLowerCase()) ||
            post.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
        );
    }

    if (sort) {
        const [field, order] = sort.split('-');
        // field = title || content

        // filteredPosts.sort((a, b) => {
        //     if(order === 'asc'){
        //         return a[field] - b[field];
        //     } else {
        //         return b[field] - a[field];
        //     }
        // });

        filteredPosts.sort((a, b) => {
            switch (field) {
                case 'title':
                    return order === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title) //string qarshilashdirmasi uchun
                case 'content':
                    return order === "asc" ? a.content.localeCompare(b.content) : b.content.localeCompare(a.content)
                case 'tags':
                    return order === "asc" ? a.tags.length - b.tags.length : b.tags.length - a.tags.length
            }
        })
    }


    const postsPage = filteredPosts.slice(skip, skip + take);


    if (includeCreator) {

        postsPage.forEach((post) => {
            const user = user.find((user) => user.id === post.user_id)
            if (!user) {
                post.user = user;
            }
        }) //filterden kechmish artiq emeliyyat olmamasi uchun creatorun idisi 

    }

    
    res.json({
        hasMore: skip + take < posts.length,
        skip,
        take,
        data: postsPage,
    });

});

router.post('/', (req, res) => {
    const { title, content, tags } = req.body;


    if (!title || !content || !tags) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const post = {
        id: uuidv4(),
        title,
        content,
        tags,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };



    posts.push(post);
    res.status(201).json({
        success: true,
        data: post,
    });
});


router.delete('/:id', (req, res) => {
    const { id } = req.params;
    console.log("id", id);


    const postIndex = posts.findIndex(post => post.id === id);

    if (postIndex === -1) {
        return res.status(404).json({ error: 'Post not found' });
    }

    const post = posts.splice(postIndex, 1)[0];
    res.json({
        success: true,
        data: post,
    });
});


router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, content, tags } = req.body;


    const post = posts.find(post => post.id === id);
    const postIndex = posts.findIndex(post => post.id === id);

    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }

    if (!title || !content || !tags) {
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
        createdAt: post.createdAt, // Ensure original createdAt remains the same
        updatedAt: new Date().toISOString(),
    };

    posts[postIndex] = updatedPost;
    res.json({
        success: true,
        data: updatedPost,
    });
});

module.exports = router;