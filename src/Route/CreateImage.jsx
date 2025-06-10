import { useState } from 'react';
import { generateImages } from '../utils/ImageAPI';
import { generateRandomSeed } from '../utils/imageUtils';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Searchbar from '../components/Searchbar';
import ImageAdvancedSettings from '../components/ImageAdvancedSettings';
import ImageGrid from '../components/ImageGrid';

const CreateImage = () => {
  const [model, setModel] = useState('flux');
  const [width, setWidth] = useState(1024);
  const [height, setHeight] = useState(1024);
  const [seed, setSeed] = useState(generateRandomSeed()); //according to task rule
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { generatedImages, setGeneratedImages } = useContext(AppContext);

  const handlePromptSubmit = async (newPrompt) => {
    setIsLoading(true);
    setError(null);

    try {
      toast.info('Generating 9 images... This may take a moment.');

      const imageUrls = await generateImages({
        prompt: newPrompt,
        model,
        width,
        height
      });

      const newImages = imageUrls.map((url) => {
        const imageSeed = generateRandomSeed();
        return {
          id: `${imageSeed}`,
          url,
          prompt: newPrompt,
          seed: imageSeed,
          model,
          width,
          height
        };
      });

      setGeneratedImages(newImages);
      toast.success('Images generated successfully!');
    } catch (err) {
      setError('Failed to generate images. Please try again.');
      toast.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAspectRatioChange = (preset) => {
    setWidth(preset.width);
    setHeight(preset.height);
  };

  return (
    <div>
      <h2 className="text-4xl font-bold mb-8">Let's create a masterpiece, Alvian! <span className="text-2xl">👋</span></h2>

      <Searchbar onSubmit={handlePromptSubmit} isLoading={isLoading} />

      <ImageAdvancedSettings
        width={width}
        height={height}
        model={model}
        seed={seed}
        onWidthChange={setWidth}
        onHeightChange={setHeight}
        onModelChange={setModel}
        onAspectRatioChange={handleAspectRatioChange}
      />

      <div>
        <h3 className="text-zinc-200 mb-4 font-bold text-lg">Results</h3>
        <ImageGrid
          images={generatedImages}
          isLoading={isLoading}
          error={error}
        />
      </div>
    </div>
  );
};

export default CreateImage;