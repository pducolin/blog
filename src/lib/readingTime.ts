interface evaluateReadingTimeProps {
  text: string;
  wordsPerMinute?: number;
}

export const evaluateReadingTime = ({text, wordsPerMinute = 200}: evaluateReadingTimeProps) => {
  const wordsCount = text.match(/\w+/g)?.length ?? 0
  const readingTime = Math.ceil(wordsCount / wordsPerMinute)

  return readingTime
}
