const cloudinary = require('cloudinary');

cloudinary.config({
  cloud_name: 'ddajtubog',
  api_key: '951549921541933',
  api_secret: 'ndT2S3PNDxMnC9sUoxtmR4gqWu8'
});

module.exports = cloudinary;