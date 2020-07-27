/**
 * Use event listener hook
 * @param event
 * @param callback
 * @param context
 */
export function useEventListener <K extends keyof WindowEventMap>(
    event: K,
    callback: (this: Window, event: BeforeUnloadEvent) => void,
    options: boolean | AddEventListenerOptions = undefined
): RemoveEventListenerCallback {
    self.addEventListener(event, callback, options);

    return () => {
        self.removeEventListener(event, callback, options);
        return callback;
    }
}


export type RemoveEventListenerCallback = (this: Window, event: BeforeUnloadEvent) => void
