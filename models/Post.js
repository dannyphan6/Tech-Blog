const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

class Post extends Model{};

Post.init({
    body: DataTypes.STRING,
    title: DataTypes.STRING
    },
    {
        sequelize
    }
);

module.exports = Post