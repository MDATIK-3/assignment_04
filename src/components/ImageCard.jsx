import { useState } from 'react';
import { downloadImage } from '../utils/downloadImage';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';
import DownloadIcon from '../assets/DownloadIcon';


const ImageCard = ({ image }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { addDownloadedImage } = useContext(AppContext);

  const handleDownload = async () => {
    setIsLoading(true);

    try {
      await downloadImage(image.url, image.prompt);
      addDownloadedImage(image);
      toast.success('Image downloaded successfully!');
    } catch (err) {
      toast.error('Failed to download image');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="image-card rounded-xl overflow-hidden cursor-pointer relative card-hover-effect">
      <button
        onClick={handleDownload}
        disabled={isLoading}
        className="absolute bottom-2 right-2  p-1"
        title="Download image"
      >
        <DownloadIcon />
      </button>
      <img
        src={image.url}
        alt={image.prompt}
        className="w-full h-48 object-cover fade-in"
        loading="lazy"
        onError={() => toast.error('Unable to Load Image')}
      />
    </div>
  );
};

export default ImageCard;