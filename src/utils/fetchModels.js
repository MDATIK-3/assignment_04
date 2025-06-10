import { fetchWithTimeout } from '../utils/imageUtils';

export const fetchModels = async (url) => {
    try {
        const response = await fetchWithTimeout(url, {}, 30000);

        if (!response.ok) {
            const statusText = response.statusText || 'Unknown error';
            throw new Error(`Failed to fetch models (${response.status}): ${statusText}`);
        }

        const data = await response.json();

        if (data[0].name) {
            return data.map((modelId) => ({
                id: modelId,
                name: modelId.name
            }));
        }
        return data.map((modelId) => ({
            id: modelId,
            name: modelId.split('/').pop() || modelId,
        }));
    } catch (error) {
        console.error('Error fetching models:', error);
        throw new Error('Unable to fetch model list. Please try again later.');
    }
}; 