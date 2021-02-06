const posts = require('./data/posts.json');

exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(posts)
  }
}