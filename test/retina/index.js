test('output should be in outputPath dir', () => {
  const multi = require('../cat-1000.jpg')
  expect(multi).toMatchSnapshot()
})
