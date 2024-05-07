import React, { useState, useEffect } from 'react';

const ImageDisplay = ({ apiKey }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${apiKey}`);
        if (!response.ok) {
          throw new Error('Failed to fetch image');
        }
        const imageData = await response.blob();
        const imageUrl = URL.createObjectURL(imageData);
        setImageUrl(imageUrl);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, [apiKey]);

  return (
    <div>
      {imageUrl && <img src={imageUrl} alt={apiKey} />}
    </div>
  );
};


export default ImageDisplay;
