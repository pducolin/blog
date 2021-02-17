export const evaluateReadingTime = (text, wordsPerMinute = 200) => {
  const wordsCount = text.match(/\w+/g).length
  const readingTime = Math.ceil(wordsCount / wordsPerMinute)

  return readingTime
}
