const User = require('../models/User');
const Post = require('../models/Posts');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

/* Queries  */

function hello() {
    return [{number: 7 }, { number: 8 }];
}

async function getAllUsers() {
    const users = await User.find().populate('posts').populate('followers').populate('follows');
    return users;
}

async function getAllPosts() {
    const posts = await Post.find().populate({path: "likes", populate: "users"});
    return posts.reverse();
}

/* Mutations  */

async function createUser(_, args) {
    const { username, gmail, password } = args.user;
    if(!username || !gmail || !password) return 'All fields required!';

    const checkForUser = await User.findOne({ username: username })
    if(checkForUser) throw new Error("User already in DB");

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // save the new user
    const newUser = new User({ username, gmail, password: hashedPassword });
    await newUser.save();
    return newUser;  
}

async function loginUser(_, args) {
    const { username, gmail, password } = args.user;
    if(!username || !gmail || !password) throw new Error('All fields required!');
    const user = await User.findOne({ username: username, gmail: gmail }).populate('posts').populate('followers').populate('follows');
    if(!user) throw new Error('User not found');

    const hashedPass = user.password
    const validatePassword = await bcrypt.compare(password, hashedPass);

    if(!validatePassword) throw new Error('Username or password is incorrect!');

    const token = jwt.sign({username, gmail, hashedPass}, process.env.TOKEN_KEY, { expiresIn: "60s" });

    return {jwt: token, user: user};
}

async function verifyToken(_, args) {
    const token = args.token;

    return jwt.verify(token, process.env.TOKEN_KEY, (err, user) => {
        if(err) {
            //throw new Error(err);
            return { isExpired: true };
        } 
        return { isExpired: false, user: user}
    })
}

async function createPost(_, args) {
    const { content, owner_id } = args.post;
    const user = await User.findById(owner_id);
    if(!user) return 'No user found';

    const newPost = new Post({ content, owner_id: user._id, owner_name: user.username });
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
    //console.log(personToFollow)
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

async function getUserById(_, args) {
    const user = await User.findById(args.id).populate('posts').populate('followers').populate('follows');

    return user;
}

module.exports = {hello, createUser, createPost, getAllUsers, getAllPosts, newFollower, newFollow, addLike, loginUser, verifyToken, getUserById};