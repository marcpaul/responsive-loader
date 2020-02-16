const imagemin = require('imagemin')
const imageminWebp = require('imagemin-webp')

module.exports = async imagePath => {
  const file = await imagemin(imagePath, {
    use: [imageminWebp({quality: 50})],
  })

  console.log('Images optimized')
  return file
}
