export const generateRandomSeed = () => {
    return Math.floor(Math.random() * 1000000000).toString();
};

export const aspectRatioPresets = [
    { name: '1:1', width: 1024, height: 1024 },
    { name: '16:9', width: 1920, height: 1080 },
    { name: '4:3', width: 1024, height: 768 },
    { name: '3:2', width: 1200, height: 800 }
];

export const fetchWithTimeout = async (url, options = {}, timeout = 60000) => {
    const controller = new AbortController();
    const { signal } = controller;

    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
        const response = await fetch(url, { ...options, signal });
        clearTimeout(timeoutId);
        return response;
    } catch (error) {
        clearTimeout(timeoutId);
        throw new Error('Request timeout - Please try again');
    }
};