import { useEventListener } from "./utils/useEvent";

/**
 * useRefreshLock
 *
 * Ensure that user allow the browser to refresh
 */
export function useRefreshLock(message: string = '', callback: () => void) {
    if (typeof callback === 'function') {
        useEventListener('unload', callback)
    }

    const release = useEventListener('beforeunload', function (event) {
        event.preventDefault();
        event.returnValue = message;
    })

    return [ release ];
}
