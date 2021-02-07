const posts = require('../data/posts.json');

const findById = (id) => posts.find(post => post.id === id)

module.exports = { findById }

