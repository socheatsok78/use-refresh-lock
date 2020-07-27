import { useEventListener } from "./utils/useEvent";

/**
 * useRefreshLock
 *
 * Ensure that user allow the browser to refresh
 */
export function useRefreshLock(callback: () => void, message: string = '') {
    const release = useEventListener('beforeunload', function (event) {
        event.preventDefault();

        if (typeof callback === 'function') callback();

        event.returnValue = message;
        return event.returnValue;
    }, { capture: true })

    return [ release ];
}
