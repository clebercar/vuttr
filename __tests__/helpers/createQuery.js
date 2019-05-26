module.exports = (array) => {
  return array.reduce((previous, current, index, array) => {
    let exp = ''

    if (index < 1) {
      exp += `faq=${current}`
    } else {
      exp += previous + `&faq=${current}`
    }

    return exp
  }, 0)
}
