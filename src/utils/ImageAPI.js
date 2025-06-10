import { fetchWithTimeout, generateRandomSeed } from '../utils/imageUtils';
import { Text_To_ImageURL } from './BASE_URL'

export const generateImage = async (params) => {
  const { prompt, model, width, height, seed } = params;

  if (!prompt || typeof prompt !== 'string' || prompt.length > 500) {
    throw new Error('Invalid or too long prompt (max 500 characters)');
  }

  try {
    const url = new URL(`${Text_To_ImageURL}${encodeURIComponent(prompt)}`);
    url.searchParams.append('model', model);
    url.searchParams.append('width', width.toString());
    url.searchParams.append('height', height.toString());
    url.searchParams.append('seed', seed);

    const response = await fetchWithTimeout(url.toString(), { method: 'GET' }, 60000);

    if (!response.ok) {
      let errorMessage = response.statusText || 'Unknown error';
      try {
        const errorData = await response.json();
        if (errorData?.message) errorMessage = errorData.message;
      } catch (error) {
        throw new error(error, errorMessage)
      }
      throw new Error(`Image generation failed (${response.status}): ${errorMessage}`);
    }

    const blob = await response.blob();
    return URL.createObjectURL(blob);
  } catch (error) {
    console.error('Error generating image:', error);
    throw new Error('Failed to generate image. Please try again later.');
  }
};

export const generateImages = async (params) => {
  const { ...imageParams } = params;

  try {
    const imageUrls = [];

    for (let i = 0; i < 9; i++) {
      const seed = generateRandomSeed();
      const imageUrl = await generateImage({ ...imageParams, seed });
      imageUrls.push(imageUrl);
    }

    return imageUrls;
  } catch (error) {
    console.error('Error generating multiple images:', error);
    throw new Error('One or more images could not be generated.');
  }
};
