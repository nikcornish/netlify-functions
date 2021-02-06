const posts = require('./data/posts');

exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(posts)
  }
}