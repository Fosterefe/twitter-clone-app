const User = require('../models/User');
const Post = require('../models/Posts');

/* Queries  */

function hello() {
    return 'Hello World';
}

async function getAllUsers() {
    const users = await User.find();
    return users;
}

async function getAllPosts() {
    const posts = await Post.find();
    return posts;
}

/* Mutations  */

async function createUser(_, args) {
    const { username, gmail, password } = args.user;
    const newUser = new User({ username, gmail, password });

    await newUser.save();
    return newUser;
}

async function createPost(_, args) {
    const { content } = args.post;
    const newPost = new Post({ content });

    await newPost.save();
    return newPost;
}

module.exports = {hello, createUser, createPost, getAllUsers, getAllPosts};