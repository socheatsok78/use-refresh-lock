# use-refresh-lock

useRefreshLock - Ensure that user allow the browser to refresh

### Installation

```sh
yarn add use-refresh-lock
```

### Usage

Create a simple refresh lock

```js
import { useRefreshLock } from 'use-refresh-lock'

// create a lock
const release = useRefreshLock()

// now when you refresh the browser, the browse will prompt an
// 'Change you made may not be save.' prompt (aka Chrome)

// release the lock, just call the `release` method returned by `useRefreshLock`
release()
```

Aditionally, you could provide a callback to `useRefreshLock`. Recommended to use only to call `navigator.sendBeacon` only.

> See: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon

```js
import { useRefreshLock } from 'use-refresh-lock'

const release = useRefreshLock(function() {
    // execute before the page successfully unloaded/reloaded
    navigator.sendBeacon("/log", analyticsData);
})
```

## License
License under [MIT](LICENSE)
