import Loading from '../assets/Loading';
import ImageCard from './ImageCard';

const ImageGrid = ({ images, isLoading, error }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden h-64 bg-zinc-900/20 animate-pulse"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/20 via-zinc-800/10 to-zinc-900/20 animate-shimmer" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Loading />
              <span className="ml-2 text-sm text-zinc-400 font-medium">Loading...</span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-900/20 border border-red-800 text-red-200 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Error</h3>
        <p>{error}</p>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="text-center py-8 text-zinc-400">
        <p>Enter a prompt and click generate to create images</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
};

export default ImageGrid;