const { Router } = require('express')
const { v4: uuidv4 } = require('uuid');
const { users } = require('../data');

const router = Router()

router.get('/', (req, res) => {
    res.json(users);
});

router.post('/', (req, res) => {
    const { first_name, last_name, password, email } = req.body;

    if (!first_name || !last_name || !password || !email) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const user = {
        id: uuidv4(),
        first_name,
        last_name,
        password,
        email,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };



    users.push(user);
    res.status(201).json({
        success: true,
        data: user,
    });
});


router.delete('/:id', (req, res) => {
    const { id } = req.params;
    console.log("id", id);


    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex === -1) {
        return res.status(404).json({ error: 'user not found' });
    }

    const user = users.splice(userIndex, 1)[0];
    res.json({
        success: true,
        data: user,
    });
});


router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, password, email } = req.body;


    const user = users.find(user => user.id === id);
    const userIndex = users.findIndex(user => user.id === id);

    if (!user) {
        return res.status(404).json({ error: 'user not found' });
    }

    if (!first_name || !last_name || !password || !email) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    user.first_name = first_name;
    user.last_name = last_name;
    user.password = password;
    user.email = email;
    user.updatedAt = new Date().toISOString();

    const updateduser = {
        id,
        first_name,
        last_name,
        password,
        email,
        createdAt: user.createdAt, // Ensure original createdAt remains the same
        updatedAt: new Date().toISOString(),
    };

    users[userIndex] = updateduser;
    res.json({
        success: true,
        data: updateduser,
    });
});

module.exports = router;