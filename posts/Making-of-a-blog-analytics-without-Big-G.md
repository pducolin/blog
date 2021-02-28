---
title: "Making of a blog: analytics without Big G"
author: "poladuco"
date: "2021-02-28"
heroImage: 
  path: 
      big: /assets/images/meters.webp
      small: /assets/images/meters_small.webp
  alt: Macro of various tape measures and rulers by William Warby on Unsplash
---

I hesitated a lot about whether to add analytics to my blog. On one side I wanted to avoid using Google Analytics: I didn't want any 3rd party cookie on my website. On the other side I shameless admit I like that ego-boost. Observing how many people open my blog and which post is read the most. I don't plan on monetizing my blog, I work on it to explore new technologies. Still, again, that blinky dopamine effect.

How to please my ego while being kind to folks visiting my website and the planet?

## Microanalytics

The solution I found is [microanalytics](microanalytics.io): it is a light analytics SaaS, hosted in EU and green-powered. GDPR compliant, no cookie, no user tracking. It has a free plan up to 10k pageviews per month. It is based on a script sold on [Code Canyon](https://codecanyon.net/item/phpanalytics-web-analytics-platform/29568779).

### Setup

1. Create an account on [microanalytics.io](microanalytics.io)

2. Register a website adding its URL

3. Add the script to the website

I added it to the `Head` in the [Layout component](https://github.com/pducolin/blog/blob/main/components/Layout.jsx#L28-L34)

```jsx
{ANALYTICS_ENABLED && (
    <script
    src="https://cdn.jsdelivr.net/gh/pducolin/blog@main/scripts/analytics-min.js"
    async
    defer
    />
)}
```

To add it only on production I use the environment variable `NODE_ENV === "production"` and assign it to `ANALYTICS_ENABLED`.

### How it works

`microanalytics` provides an HTML script, easy to add to the header of a static HTML pages.

```html
<script data-host="https://microanalytics.io" data-dnt="false" src="https://microanalytics.io/js/script.js" id="ZwSg9rf6GA" async defer></script>
```

I downloaded the script to see what it was doing:

```js
// From https://microanalytics.io/js/script.js
!function(t){"use strict";function e(e,r){var n=document.getElementById("ZwSg9rf6GA");if("true"===n.getAttribute("data-dnt")&&navigator.doNotTrack)return!1;var a={};a.referrer=r||t.document.referrer,a.page=t.location.href.replace(/#.+$/,""),a.screen_resolution=screen.width+"x"+screen.height,e&&(a.event=e);var o=new XMLHttpRequest;o.open("POST",n.getAttribute("data-host")+"/api/event",!0),o.setRequestHeader("Content-Type","application/json, text/javascript; charset=utf-8"),o.send(JSON.stringify(a))}try{var r=history.pushState;history.pushState=function(){var n=t.location.href.replace(/#.+$/,"");r.apply(history,arguments),e(null,n)},t.onpopstate=function(t){e(null)},t.pa={},t.pa.track=e,e(null)}catch(t){console.log(t.message)}}(window);
```

Beautify-ed it to make it more readable:

```js
// I used https://beautifier.io/
! function(t) {
    "use strict";

    function e(e, r) {
        var n = document.getElementById("ZwSg9rf6GA");
        if ("true" === n.getAttribute("data-dnt") && navigator.doNotTrack) return !1;
        var a = {};
        a.referrer = r || t.document.referrer, a.page = t.location.href.replace(/#.+$/, ""), a.screen_resolution = screen.width + "x" + screen.height, e && (a.event = e);
        var o = new XMLHttpRequest;
        o.open("POST", n.getAttribute("data-host") + "/api/event", !0), o.setRequestHeader("Content-Type", "application/json, text/javascript; charset=utf-8"), o.send(JSON.stringify(a))
    }
    try {
        var r = history.pushState;
        history.pushState = function() {
            var n = t.location.href.replace(/#.+$/, "");
            r.apply(history, arguments), e(null, n)
        }, t.onpopstate = function(t) {
            e(null)
        }, t.pa = {}, t.pa.track = e, e(null)
    } catch (t) {
        console.log(t.message)
    }
}(window);
```

The core tracking part was an `XmlHttpRequest` sending a `POST` request

```js
// I changed variable names for readability
var query = new XMLHttpRequest;
query.open("POST", scriptELement.getAttribute("data-host") + "/api/event", !0), query.setRequestHeader("Content-Type", "application/json, text/javascript; charset=utf-8"), query.send(JSON.stringify(body))
```

The body of the request is:  

```js
// I changed variable names for readability
var requestBody = {
    referrer, // document.referrer, URI of the page that linked to this page
    page, // current page URL
    screen_resolution, // screen.width + "x" + screen.height
    event // 🤷‍♀️ never used

};
```

Looking at dev tools the request is:

![creenshot of devtools showing the details of a POST request to microanalytics.io][devtools]

## In conclusion

I was looking for an alternative to Google Analytics. I wanted it to be light, provided as a service (SaaS) and that didn't store any cookie on the client.

microanalytics met my requirements for free.

I found few other services with these requirements:

- [Plausible](https://plausible.io/)
- [Mamoto](https://matomo.org/)
- [micro-analytics](https://github.com/micro-analytics/micro-analytics-cli) (no SaaS)
  
They are all open source projects that can be self-hosted and I might explore them in the future.

Do you know of any other tools? Can you live without analytics on your personal blog? Reach out and let me know!

[devtools]: https://raw.githubusercontent.com/pducolin/blog/main/public/assets/images/devtools-microanalytics.webp "Screenshot of devtools showing the details of a POST request to microanalytics.io"
