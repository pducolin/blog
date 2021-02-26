import { useEffect, useState } from "react"

// Detect window size in nextjs
// From https://stackoverflow.com/questions/63406435/how-to-detect-window-size-in-next-js-ssr-using-react-hook
export const useWindowSize = () => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  })

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window === "undefined") {
      return
    }

    if (typeof window !== "undefined") {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
  }, []) // Empty array ensures that effect is only run on mount
  return windowSize
}
