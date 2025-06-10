import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ImageCard from '../components/ImageCard';

const Downloaded = () => {
  const { downloadedImages } = useContext(AppContext);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Your Downloaded Images</h2>

      {downloadedImages.length === 0 ? (
        <div className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-8 text-center">
          <h3 className="text-xl font-medium mb-2">No downloaded images yet</h3>
          <p className="text-zinc-400">
            Go to the Create Image page to generate and download some amazing AI art!
          </p>
        </div>
      ) : (
        <div>
          <p className="text-zinc-400 mb-4">You have downloaded {downloadedImages.length} unique images</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {downloadedImages.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Downloaded;