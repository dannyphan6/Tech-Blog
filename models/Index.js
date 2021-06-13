const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User');

Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
    foreignKey: 'postId'
});

Comment.belongsTo(User, {
    foreignKey: 'commentId',
    onDelete: 'CASCADE'
});

module.exports = { Post, Comment, User };