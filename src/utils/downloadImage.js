export const downloadImage = async (imageUrl, prompt) => {
    try {
        const response = await fetch(imageUrl);
        const blob = await response.blob();

        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);

        const filename = `${prompt.substring(0, 10).replace(/\s+/g, '-')}.png`;
        link.download = filename;

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
    } catch (error) {
        console.error('Error downloading image:', error);
    }
};