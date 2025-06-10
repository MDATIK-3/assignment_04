import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [downloadedImages, setDownloadedImages] = useState([]);
  const [generatedImages, setGeneratedImages] = useState([]);

  const addDownloadedImage = (image) => {
    const exists = downloadedImages.some((img) => img.id === image.id);
    if (!exists) {
      setDownloadedImages((prev) => [...prev, image]);
    }
  };

  return (
    <AppContext.Provider value={{
      downloadedImages,
      addDownloadedImage,
      generatedImages,
      setGeneratedImages
    }}>
      {children}
    </AppContext.Provider>
  );
};
