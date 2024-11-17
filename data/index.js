const {BASE_URL} = require("../constants")
const { v4: uuidv4 } = require('uuid');

const users = [
  {
    "id": uuidv4(),
    "first_name": "Alex",
    "last_name": "Johnson",
    "email": "alex.johnson@example.com",
    "avatar": "https://randomuser.me/api/portraits/men/1.jpg",
    "password": "password123"
  },
  {
    "id": uuidv4(),
    "first_name": "Emily",
    "last_name": "Davis",
    "email": "emily.davis@example.com",
    "avatar": "https://randomuser.me/api/portraits/women/2.jpg",
    "password": "password123"
  },
  {
    "id": uuidv4(),
    "first_name": "Ryan",
    "last_name": "Martinez",
    "email": "ryan.martinez@example.com",
    "avatar": "https://randomuser.me/api/portraits/men/3.jpg",
    "password": "password123"
  },
  {
    "id": uuidv4(),
    "first_name": "Sarah",
    "last_name": "Williams",
    "email": "sarah.williams@example.com",
    "avatar": "https://randomuser.me/api/portraits/women/4.jpg",
    "password": "password123"
  },
  {
    "id": uuidv4(),
    "first_name": "James",
    "last_name": "Brown",
    "email": "james.brown@example.com",
    "avatar": "https://randomuser.me/api/portraits/men/5.jpg",
    "password": "password123"
  },
  {
    "id": uuidv4(),
    "first_name": "Maria",
    "last_name": "Gonzalez",
    "email": "maria.gonzalez@example.com",
    "avatar": "https://randomuser.me/api/portraits/women/6.jpg",
    "password": "password123"
  },
  {
    "id": uuidv4(),
    "first_name": "Michael",
    "last_name": "Smith",
    "email": "michael.smith@example.com",
    "avatar": "https://randomuser.me/api/portraits/men/7.jpg",
    "password": "password123"
  },
  {
    "id": uuidv4(),
    "first_name": "Jessica",
    "last_name": "Lopez",
    "email": "jessica.lopez@example.com",
    "avatar": "https://randomuser.me/api/portraits/women/8.jpg",
    "password": "password123"
  },
  {
    "id": uuidv4(),
    "first_name": "David",
    "last_name": "Miller",
    "email": "david.miller@example.com",
    "avatar": "https://randomuser.me/api/portraits/men/9.jpg",
    "password": "password123"
  },
  {
    "id": uuidv4(),
    "first_name": "Sophia",
    "last_name": "Taylor",
    "email": "sophia.taylor@example.com",
    "avatar": "https://randomuser.me/api/portraits/women/10.jpg",
    "password": "password123"
  }
];



const posts = [
  {
    "id": uuidv4(),
    "title": "My First Blog Post",
    "date": "2024-11-01T12:00:00Z",
    "content": "This is the content of my first blog post.",
    "tags": ["introduction", "welcome"],
    "comments_count": 5,
    "comments": [
      { "user_id": users[0].id, "comment": "Great first post! Looking forward to more." },
      { "user_id": users[1].id, "comment": "Welcome to blogging! Excited to see what’s next." },
      { "user_id": users[2].id, "comment": "Nice introduction, keep it up!" },
      { "user_id": users[3].id, "comment": "Great job, looking forward to the next one!" },
      { "user_id": users[4].id, "comment": "Great post, I like the clarity in your writing." },
    ],
    "user_id": users[0].id,
    "image": "https://via.placeholder.com/800x400?text=My+First+Blog+Post",
  },
  {
    "id": uuidv4(),
    "title": "How to Use Fake API",
    "date": "2024-11-02T08:00:00Z",
    "content": "In this post, I will explain how to use the fake blog API.",
    "tags": ["api", "tutorial"],
    "comments_count": 2,
    "comments": [
      { "user_id": users[1].id, "comment": "This is very helpful, thank you for the guide!" },
      { "user_id": users[2].id, "comment": "I tried it and it worked perfectly, thanks!" },
    ],
    "user_id": users[1].id,
    "image": "https://via.placeholder.com/800x400?text=How+to+Use+Fake+API",
  },
  {
    "id": uuidv4(),
    "title": "Understanding JavaScript Closures",
    "date": "2024-11-03T10:30:00Z",
    "content": "Closures are one of the most important concepts in JavaScript. Let's dive into how they work.",
    "tags": ["javascript", "closures"],
    "comments_count": 3,
    "comments": [
      { "user_id": users[2].id, "comment": "I always found closures confusing, but this post made it clear!" },
      { "user_id": users[3].id, "comment": "Great breakdown! Thanks for the explanation." },
      { "user_id": users[4].id, "comment": "Nice post! Looking forward to learning more about closures." },
    ],
    "user_id": users[2].id,
    "image": "https://via.placeholder.com/800x400?text=Understanding+JavaScript+Closures",
  },
  {
    "id": uuidv4(),
    "title": "React Hooks for Beginners",
    "date": "2024-11-04T09:45:00Z",
    "content": "React hooks are a new feature in React 16.8 that allows you to use state and other React features without writing a class.",
    "tags": ["react", "hooks", "tutorial"],
    "comments_count": 4,
    "comments": [
      { "user_id": users[5].id, "comment": "This was a great introduction to hooks!" },
      { "user_id": users[6].id, "comment": "React hooks are so much easier to work with than classes!" },
      { "user_id": users[7].id, "comment": "I’ve been using class components, but hooks seem more efficient." },
      { "user_id": users[8].id, "comment": "Thanks for the clear examples!" },
    ],
    "user_id": users[5].id,
    "image": "https://via.placeholder.com/800x400?text=React+Hooks+for+Beginners",
  },
  {
    "id": uuidv4(),
    "title": "How to Build a RESTful API with Node.js",
    "date": "2024-11-05T07:30:00Z",
    "content": "In this post, we will learn how to build a RESTful API using Node.js and Express.",
    "tags": ["node.js", "express", "api"],
    "comments_count": 3,
    "comments": [
      { "user_id": users[6].id, "comment": "Thanks for the detailed tutorial! It was really helpful." },
      { "user_id": users[7].id, "comment": "This was exactly what I needed to get started with Express." },
      { "user_id": users[8].id, "comment": "Great explanation of RESTful principles!" },
    ],
    "user_id": users[6].id,
    "image": "https://via.placeholder.com/800x400?text=How+to+Build+a+RESTful+API+with+Node.js",
  },
  {
    "id": uuidv4(),
    "title": "Mastering CSS Grid",
    "date": "2024-11-06T11:15:00Z",
    "content": "CSS Grid is a powerful tool for creating complex layouts. In this post, we will dive into the basics and advanced usage of CSS Grid.",
    "tags": ["css", "grid", "tutorial"],
    "comments_count": 3,
    "comments": [
      { "user_id": users[7].id, "comment": "I love using CSS Grid! This post helped me understand it even better." },
      { "user_id": users[8].id, "comment": "Great breakdown of grid properties and values!" },
      { "user_id": users[9].id, "comment": "This is a fantastic resource for mastering CSS Grid." },
    ],
    "user_id": users[7].id,
    "image": "https://via.placeholder.com/800x400?text=Mastering+CSS+Grid",
  },
  {
    "id": uuidv4(),
    "title": "Getting Started with TypeScript",
    "date": "2024-11-07T13:30:00Z",
    "content": "TypeScript is a superset of JavaScript that offers static typing. Let’s go over the basics and start using TypeScript in your projects.",
    "tags": ["typescript", "javascript", "tutorial"],
    "comments_count": 4,
    "comments": [
      { "user_id": users[8].id, "comment": "I’ve been meaning to learn TypeScript, this is a great start!" },
      { "user_id": users[9].id, "comment": "Thanks for the clear examples, I will try to integrate this into my project." },
      { "user_id": users[0].id, "comment": "This tutorial makes TypeScript feel a lot more approachable!" },
      { "user_id": users[1].id, "comment": "I’m excited to start using TypeScript in my next project!" },
    ],
    "user_id": users[8].id,
    "image": "https://via.placeholder.com/800x400?text=Getting+Started+with+TypeScript",
  },
  {
    "id": uuidv4(),
    "title": "Building Mobile Apps with React Native",
    "date": "2024-11-08T12:00:00Z",
    "content": "React Native allows you to build mobile apps using JavaScript and React. In this post, we’ll explore how to set up your first mobile app.",
    "tags": ["react", "react native", "mobile", "tutorial"],
    "comments_count": 3,
    "comments": [
      { "user_id": users[0].id, "comment": "I love React Native! This guide is so helpful for getting started." },
      { "user_id": users[1].id, "comment": "Building mobile apps with React Native is so much easier than native development." },
      { "user_id": users[2].id, "comment": "Great post! Looking forward to building my first mobile app using this." },
    ],
    "user_id": users[0].id,
    "image": "https://via.placeholder.com/800x400?text=Building+Mobile+Apps+with+React+Native",
  },
  {
    "id": uuidv4(),
    "title": "Exploring Node.js Streams",
    "date": "2024-11-09T09:45:00Z",
    "content": "Node.js streams are a powerful way to handle large amounts of data efficiently. In this post, we’ll go through what streams are and how to use them.",
    "tags": ["node.js", "streams", "tutorial"],
    "comments_count": 2,
    "comments": [
      { "user_id": users[1].id, "comment": "Node.js streams are a bit tricky, but this post makes them clearer." },
      { "user_id": users[2].id, "comment": "I’ve used streams before, but this was a great refresher." },
    ],
    "user_id": users[1].id,
    "image": "https://via.placeholder.com/800x400?text=Exploring+Node.js+Streams",
  }
];






module.exports = {
    users,
    posts,
};
