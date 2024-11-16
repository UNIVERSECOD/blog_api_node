const {BASE_URL} = require("../constants")



const posts = [
  {
    id: 1,
    title: "My First Blog Post",
    date: "2024-11-01T12:00:00Z",
    content: "This is the content of my first blog post.",
    tags: ["introduction", "welcome"],
    comments_count: 5,
    comments: [
      { user_id: 2, comment: "Great first post! Looking forward to more." },
      {
        user_id: 3,
        comment: "Welcome to blogging! Excited to see what’s next.",
      },
      { user_id: 4, comment: "Nice introduction, keep it up!" },
      { user_id: 5, comment: "Great job, looking forward to the next one!" },
      {
        user_id: 6,
        comment: "Great post, I like the clarity in your writing.",
      },
    ],
    user_id: 1,
    image: "https://via.placeholder.com/800x400?text=My+First+Blog+Post",
  },
  {
    id: 2,
    title: "How to Use Fake API",
    date: "2024-11-02T08:00:00Z",
    content: "In this post, I will explain how to use the fake blog API.",
    tags: ["api", "tutorial"],
    comments_count: 2,
    comments: [
      { user_id: 7, comment: "This is very helpful, thank you for the guide!" },
      { user_id: 8, comment: "I tried it and it worked perfectly, thanks!" },
    ],
    user_id: 2,
    image: "https://via.placeholder.com/800x400?text=How+to+Use+Fake+API",
  },
  {
    id: 3,
    title: "The Future of Artificial Intelligence",
    date: "2024-11-03T14:30:00Z",
    content:
      "Artificial Intelligence is rapidly changing the way we live. In this post, we’ll explore its potential.",
    tags: ["AI", "technology", "future"],
    comments_count: 7,
    comments: [
      { user_id: 9, comment: "AI is definitely the future. Great article!" },
      {
        user_id: 10,
        comment: "I’m excited about AI and what it means for jobs.",
      },
      {
        user_id: 11,
        comment: "This was an insightful read, thanks for sharing.",
      },
      {
        user_id: 12,
        comment: "AI will revolutionize so many industries, excited for more!",
      },
      {
        user_id: 13,
        comment: "Very informative, thank you for breaking this down.",
      },
      {
        user_id: 14,
        comment: "I’m starting to see more AI in my work. It’s growing fast.",
      },
      { user_id: 15, comment: "The potential of AI is truly mind-blowing!" },
    ],
    user_id: 3,
    image: "https://via.placeholder.com/800x400?text=The+Future+of+AI",
  },
  {
    id: 4,
    title: "A Beginner’s Guide to Python Programming",
    date: "2024-11-04T10:00:00Z",
    content:
      "Learn the basics of Python in this beginner’s guide. Whether you’re starting from scratch or refining your skills, this guide has you covered.",
    tags: ["python", "programming", "tutorial"],
    comments_count: 12,
    comments: [
      {
        user_id: 1,
        comment: "This is a great introduction to Python, very helpful!",
      },
      {
        user_id: 4,
        comment: "I love Python! This guide is perfect for beginners.",
      },
      {
        user_id: 5,
        comment: "Thanks for the detailed explanation, I’m learning a lot.",
      },
      {
        user_id: 6,
        comment: "I needed this guide, it's exactly what I was looking for.",
      },
      {
        user_id: 7,
        comment: "I’m a beginner, this really helped me understand the basics.",
      },
      {
        user_id: 8,
        comment: "Awesome! Can’t wait to try out some Python scripts.",
      },
      {
        user_id: 9,
        comment: "Great guide, can you add more examples in the next post?",
      },
      {
        user_id: 10,
        comment: "Python is such a great language to start with. Thanks!",
      },
      { user_id: 11, comment: "Fantastic intro, can’t wait to start coding." },
      {
        user_id: 12,
        comment: "I just started learning Python. This is exactly what I need.",
      },
      {
        user_id: 13,
        comment: "Your step-by-step approach makes learning easy.",
      },
      {
        user_id: 14,
        comment: "I’m a complete beginner, and this is super helpful. Thanks!",
      },
    ],
    user_id: 4,
    image:
      "https://via.placeholder.com/800x400?text=Beginner%27s+Guide+to+Python",
  },
  {
    id: 5,
    title: "Understanding Blockchain Technology",
    date: "2024-11-05T09:00:00Z",
    content:
      "Blockchain is one of the most revolutionary technologies of our time. Let’s dive into how it works and its real-world applications.",
    tags: ["blockchain", "technology", "cryptocurrency"],
    comments_count: 8,
    comments: [
      { user_id: 3, comment: "This is a fantastic explanation of blockchain." },
      {
        user_id: 5,
        comment: "Blockchain is changing the world, this was very insightful.",
      },
      { user_id: 6, comment: "I love learning about blockchain, great post!" },
      {
        user_id: 8,
        comment: "I’m amazed at how blockchain can be used beyond crypto.",
      },
      {
        user_id: 9,
        comment:
          "Blockchain could change everything. Thanks for the explanation.",
      },
      { user_id: 10, comment: "Great breakdown of how blockchain works." },
      {
        user_id: 11,
        comment:
          "I’ve always been curious about blockchain, this post really helped.",
      },
      {
        user_id: 12,
        comment:
          "Looking forward to seeing how blockchain develops in the future.",
      },
    ],
    user_id: 5,
    image: "https://via.placeholder.com/800x400?text=Understanding+Blockchain",
  },
  {
    id: 6,
    title: "How to Build a Personal Website",
    date: "2024-11-06T07:00:00Z",
    content:
      "Building your personal website is easier than you think. Here's a step-by-step guide to get you started with web development.",
    tags: ["web development", "personal website", "tutorial"],
    comments_count: 6,
    comments: [
      {
        user_id: 1,
        comment:
          "I’ve been wanting to create a website. This post helps a lot.",
      },
      {
        user_id: 4,
        comment: "Good tips, I’m starting to work on my own website.",
      },
      {
        user_id: 6,
        comment: "I need to make a personal website. This is perfect.",
      },
      {
        user_id: 7,
        comment: "I’ve already started my website using these tips!",
      },
      {
        user_id: 10,
        comment: "Great post! I’m planning to create a personal website soon.",
      },
      {
        user_id: 12,
        comment: "This is just what I needed. Thanks for sharing!",
      },
    ],
    user_id: 6,
    image: "https://via.placeholder.com/800x400?text=Build+Personal+Website",
  },
  {
    id: 7,
    title: "The Importance of Mental Health Awareness",
    date: "2024-11-07T13:30:00Z",
    content:
      "Mental health is often overlooked. Let’s discuss why it’s important to take care of your mind and how to seek help when needed.",
    tags: ["mental health", "awareness", "self-care"],
    comments_count: 4,
    comments: [
      {
        user_id: 5,
        comment:
          "Mental health is so important, thanks for bringing awareness.",
      },
      { user_id: 6, comment: "This is such a relevant topic. Great article." },
      {
        user_id: 8,
        comment:
          "I agree, mental health often gets overlooked. Thanks for this post.",
      },
      {
        user_id: 10,
        comment: "Important topic, definitely needs more attention.",
      },
    ],
    user_id: 7,
    image: "https://via.placeholder.com/800x400?text=Mental+Health+Awareness",
  },
  {
    id: 8,
    title: "5 Tips for Becoming a Better Writer",
    date: "2024-11-08T11:00:00Z",
    content:
      "Writing is a skill that can always be improved. Here are five tips that will help you become a better writer.",
    tags: ["writing", "skills", "improvement"],
    comments_count: 9,
    comments: [
      { user_id: 2, comment: "These tips are fantastic, thanks for sharing!" },
      {
        user_id: 3,
        comment: "I’m definitely going to try some of these tips.",
      },
      {
        user_id: 4,
        comment: "I’m always looking for ways to improve my writing.",
      },
      {
        user_id: 5,
        comment:
          "Great tips, writing is something I’m always trying to improve.",
      },
      {
        user_id: 7,
        comment: "I need to work on my writing. This was really helpful.",
      },
      {
        user_id: 8,
        comment: "I feel like I can improve my writing with these tips.",
      },
      {
        user_id: 9,
        comment: "This post has given me a new perspective on writing.",
      },
      {
        user_id: 10,
        comment:
          "Great post! These tips will definitely help me become a better writer.",
      },
      {
        user_id: 11,
        comment:
          "I’ve bookmarked this, I need to keep working on my writing skills.",
      },
    ],
    user_id: 8,
    image: "https://via.placeholder.com/800x400?text=Tips+for+Better+Writing",
  },
];

const users = [
  {
    id: 1,
    first_name: "Alex",
    last_name: "Johnson",
    email: "alex.johnson@example.com",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    gender: "male",
    location: "New York, USA",
    phone: "+1 (555) 123-4567",
    dob: "1985-03-14",
    bio: "A tech enthusiast and software engineer.",
  },
  {
    id: 2,
    first_name: "Emily",
    last_name: "Davis",
    email: "emily.davis@example.com",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    gender: "female",
    location: "London, UK",
    phone: "+44 20 7946 0958",
    dob: "1990-08-22",
    bio: "Digital marketing expert and travel lover.",
  },
  {
    id: 3,
    first_name: "Ryan",
    last_name: "Martinez",
    email: "ryan.martinez@example.com",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    gender: "male",
    location: "Los Angeles, USA",
    phone: "+1 (555) 234-5678",
    dob: "1983-01-10",
    bio: "Photographer and nature explorer.",
  },
  {
    id: 4,
    first_name: "Sophia",
    last_name: "Lee",
    email: "sophia.lee@example.com",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    gender: "female",
    location: "Sydney, Australia",
    phone: "+61 2 9876 5432",
    dob: "1987-11-30",
    bio: "Passionate about graphic design and art.",
  },
  {
    id: 5,
    first_name: "Jack",
    last_name: "Nguyen",
    email: "jack.nguyen@example.com",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    gender: "male",
    location: "Ho Chi Minh City, Vietnam",
    phone: "+84 28 3940 1234",
    dob: "1992-07-04",
    bio: "Web developer and coding enthusiast.",
  },
  {
    id: 6,
    first_name: "Olivia",
    last_name: "Taylor",
    email: "olivia.taylor@example.com",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    gender: "female",
    location: "Toronto, Canada",
    phone: "+1 (416) 789-0123",
    dob: "1995-12-15",
    bio: "Tech writer and coffee lover.",
  },
  {
    id: 7,
    first_name: "Daniel",
    last_name: "Cooper",
    email: "daniel.cooper@example.com",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
    gender: "male",
    location: "Manchester, UK",
    phone: "+44 161 848 1234",
    dob: "1989-06-27",
    bio: "Fitness coach and health advocate.",
  },
  {
    id: 8,
    first_name: "Lily",
    last_name: "Brown",
    email: "lily.brown@example.com",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    gender: "female",
    location: "San Francisco, USA",
    phone: "+1 (415) 654-7890",
    dob: "1993-09-09",
    bio: "Freelance writer and travel blogger.",
  },
  {
    id: 9,
    first_name: "Samuel",
    last_name: "Wilson",
    email: "samuel.wilson@example.com",
    avatar: "https://randomuser.me/api/portraits/men/9.jpg",
    gender: "male",
    location: "Chicago, USA",
    phone: "+1 (312) 345-6789",
    dob: "1981-02-18",
    bio: "Entrepreneur and business strategist.",
  },
  {
    id: 10,
    first_name: "Mia",
    last_name: "Robinson",
    email: "mia.robinson@example.com",
    avatar: "https://randomuser.me/api/portraits/women/10.jpg",
    gender: "female",
    location: "Los Angeles, USA",
    phone: "+1 (213) 555-4567",
    dob: "1996-04-24",
    bio: "Fashion designer and beauty expert.",
  },
  {
    id: 11,
    first_name: "Ethan",
    last_name: "Clark",
    email: "ethan.clark@example.com",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    gender: "male",
    location: "Seattle, USA",
    phone: "+1 (206) 654-9870",
    dob: "1988-12-05",
    bio: "Music producer and tech enthusiast.",
  },
  {
    id: 12,
    first_name: "Sophia",
    last_name: "Harris",
    email: "sophia.harris@example.com",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    gender: "female",
    location: "Paris, France",
    phone: "+33 1 23 45 67 89",
    dob: "1984-01-30",
    bio: "Food blogger and home chef.",
  },
  {
    id: 13,
    first_name: "Jackson",
    last_name: "Moore",
    email: "jackson.moore@example.com",
    avatar: "https://randomuser.me/api/portraits/men/13.jpg",
    gender: "male",
    location: "New York, USA",
    phone: "+1 (646) 555-2345",
    dob: "1991-11-19",
    bio: "Sports coach and motivational speaker.",
  },
  {
    id: 14,
    first_name: "Grace",
    last_name: "Lee",
    email: "grace.lee@example.com",
    avatar: "https://randomuser.me/api/portraits/women/14.jpg",
    gender: "female",
    location: "Tokyo, Japan",
    phone: "+81 3 1234 5678",
    dob: "1990-04-27",
    bio: "Graphic designer and illustrator.",
  },
  {
    id: 15,
    first_name: "Aiden",
    last_name: "Scott",
    email: "aiden.scott@example.com",
    avatar: "https://randomuser.me/api/portraits/men/15.jpg",
    gender: "male",
    location: "Miami, USA",
    phone: "+1 (305) 555-6789",
    dob: "1994-02-15",
    bio: "Social media strategist and content creator.",
  },
];

module.exports = {
    users,
    posts,
};
