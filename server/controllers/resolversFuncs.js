const User = require('../models/User');
const Post = require('../models/Posts');

/* Queries  */

function hello() {
    return [{number: 7 }, { number: 8 }];
}

async function getAllUsers() {
    const users = await User.find().populate('posts').populate('followers').populate('follows');
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
    const { content, owner_id } = args.post;
    const user = await User.findById(owner_id);
    if(!user) return 'No user found';

    const newPost = new Post({ content, owner_id: user._id });
    await newPost.save();

    try {
        user.posts = user.posts.concat(newPost._id);   
        await user.save();     
        return newPost;
    } catch (err) {
        console.error(err)
    }

}

async function newFollower(_, args) {
    const { id, userId } = args.follower

    // the follower
    const follower = await User.findById(id);
    if(!follower) return 'There has been some error';

    // my user
    const user = await User.findById(userId);
    if(!user) return 'User not found';

    try {
        user.followers = user.followers.concat(follower._id);
        follower.follows = follower.follows.concat(user._id);
        await user.save()
        await follower.save();
        return user.populate('followers');
    } catch (err) {
        console.error(err)
    }
}

async function newFollow(_, args) {
    const { myId, userId } = args.follow;

    const myUser = await User.findById(myId);
    const personToFollow = await User.findById(userId);
    console.log(personToFollow)
    if(!myUser || !personToFollow) return 'There was an error';

    try {
        myUser.follows = myUser.follows.concat(personToFollow._id);
        personToFollow.followers = personToFollow.followers.concat(myUser._id);
        await personToFollow.save();
        await myUser.save();

        return myUser.populate('follows');

    } catch (err) {
        console.error(err);
    } 
}

async function addLike(_, args) {
    const { add, userId, postId } =  args.payload;

    const post = await Post.findById(postId);
    const user = await User.findById(userId);
    if(!post || !user) return 'Post not found';

    try {
        if(add===true) {
            post.likes.amount = post.likes.amount + 1;
            post.likes.users = post.likes.users.concat(user._id);
            await post.save();
            return post.populate({path: "likes", populate: "users"});
        } else {
            if(post.likes.amount === 0) return post;
            post.likes.amount = post.likes.amount - 1;
            await post.save();
            return post.populate({path: "likes", populate: "users"});
        }
    } catch (err) {
        console.error(err);
    }

}

module.exports = {hello, createUser, createPost, getAllUsers, getAllPosts, newFollower, newFollow, addLike};