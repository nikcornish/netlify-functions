const posts = require('./data/posts.json'),
      utils = require('./utils');

exports.handler = async (event, context) => {

  const found = utils.findById(event.queryStringParameters.id);

  if(found) {
    return {
      statusCode: 200,
      body: JSON.stringify(found)
    }
  } else {
    return {
      statusCode: 400,
      body: 'Post with id not found'
    }
  }
}