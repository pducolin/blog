import { useEffect } from "react"
import { useWindowSize } from "@hooks/useWindowSize"

const MICROANALYTICS_URL = "https://microanalytics.io/api/event"
const MICROANALYTICS_CONTENT_TYPE = "application/json, text/javascript; charset=utf-8"

const postAnalytics = async ({ page, windowsResolution }) => {
  let resolution = undefined
  if (windowsResolution && windowsResolution.width && windowsResolution.height) {
    resolution = `${windowsResolution.width}x${windowsResolution.height}`
  }
  await fetch(MICROANALYTICS_URL, {
    method: "POST",
    headers: {
      "Content-Type": MICROANALYTICS_CONTENT_TYPE
    },
    body: JSON.stringify({
      page: page,
      screen_resolution: resolution
    })
  })
}

export const Analytics = ({ page }) => {
  const windowsResolution = useWindowSize()

  useEffect(() => {
    // only execute on client side
    if (typeof window === "undefined") {
      return
    }

    postAnalytics({ page, windowsResolution })
  }, [page, windowsResolution])

  return <></>
}
