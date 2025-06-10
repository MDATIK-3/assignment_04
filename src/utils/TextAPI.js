import { fetchWithTimeout } from './imageUtils';
import {Text_To_TextURL} from './BASE_URL'

export const generateText = async (params) => {
  try {
    const url = new URL(`${Text_To_TextURL}/${encodeURIComponent(params.prompt)}`);
    
    if (params.model) url.searchParams.append('model', params.model);
      
    const response = await fetchWithTimeout(url.toString(), {
      method: 'GET',
    }, 30000); 
    
    if (!response.ok) {
      const statusText = response.statusText || 'Unknown error';
      throw new Error(`Failed to generate text (${response.status}): ${statusText}`);
    }
    
    const text = await response.text();
    return text;
  } catch (error) {
    console.error('Error generating text:', error);
    throw error;
  }
};