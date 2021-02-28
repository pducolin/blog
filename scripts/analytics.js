const MICROANALYTICS_URL = "https://microanalytics.io/api/event"
const MICROANALYTICS_CONTENT_TYPE = "application/json, text/javascript; charset=utf-8"

const postAnalytics = async () => {
  // respect user's Do Not Track setting
  if (navigator?.doNotTrack) {
    return
  }

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
      page: window.location.href,
      screen_resolution: resolution
    })
  })
}

postAnalytics()
