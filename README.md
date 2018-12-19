# MP Promise
Automatically promisify your WeChat Mini Program API functions! 
自动promisify微信小程序接口公式

## Installation
---
1. Clone this repository and save mp-promise.js somewhere in your mini program directory.
2. Import the module at the top of your page, component, or file. Then you can simply use ```wxp.``` instead of ```wx.``` to return a promise to any mini program API function that returns a ```success``` or ```fail```:
```js
import wxp from 'mp-promise'

// using promises
wxp.request({ url, method })
  .then((res) => doResMethod())
  .catch((error) => doErrorMethod())

// using async await
try {
  const res = await wxp.request({ url, method })
  doResMethod()
} catch (error) {
  doErrorMethod()
}
```

## Caveats
---
**Note:** This module uses **Proxy** to dynamically attach methods to any API call fed to it. The official mini program documentation states that < iOS 10 devices do not support Proxy. Depending on your userbase, this module may not be suitable for production. You should also turn on ES6 -> ES5 transpiling or use something like webpack for better compatibility.
