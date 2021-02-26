import { useEffect } from "react"

const MICROANALYTICS_URL = "https://microanalytics.io/api/event"
const MICROANALYTICS_CONTENT_TYPE = "application/json, text/javascript; charset=utf-8"

const postAnalytics = async ({ page }) => {
  let resolution = undefined
  if (window && window.width && window.height) {
    resolution = `${window.width}x${window.height}`
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
  useEffect(() => {
    // only execute on client side
    if (typeof window === "undefined") {
      return
    }

    postAnalytics({ page })
  }, [page])

  return <></>
}
