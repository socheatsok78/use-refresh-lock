import { useEventListener, RemoveEventListenerCallback } from "./utils/useEvent";

/**
 * useRefreshLock
 *
 * Ensure that user allow the browser to refresh
 */
export function useRefreshLock(callback: () => void = () => {}, message: string = ''): RemoveEventListenerCallback {
    if (typeof callback === 'function') {
        useEventListener('unload', callback)
    }

    const release = useEventListener('beforeunload', function (event) {
        event.preventDefault();
        event.returnValue = message;
        return event.returnValue;
    }, { capture: true })

    return release;
}
