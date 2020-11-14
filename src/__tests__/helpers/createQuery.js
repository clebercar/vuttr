module.exports = (array) => {
  return array.reduce((previous, current, index, array) => {
    let exp = ''

    if (index < 1) {
      exp += `tag=${current}`
    } else {
      exp += previous + `&tag=${current}`
    }

    return exp
  }, 0)
}
