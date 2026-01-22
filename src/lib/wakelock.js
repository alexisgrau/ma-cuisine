export async function requestWakeLock() {
    try {
        if ('wakeLock' in navigator) {
            const wakeLock = await navigator.wakeLock.request('screen');
            console.log('Wake Lock is active');
            return wakeLock;
        }
    } catch (err) {
        // @ts-ignore
        console.error(`${err.name}, ${err.message}`);
    }
    return null;
}