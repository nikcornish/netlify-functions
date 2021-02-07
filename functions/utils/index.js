const posts = require('../data/posts');

const findById = (id) => posts.find(post => post.id === id)

module.exports = { findById }

