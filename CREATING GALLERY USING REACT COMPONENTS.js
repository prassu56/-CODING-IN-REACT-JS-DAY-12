//  we have to create 3files with names as our wish like app.js,GALLERY.js,gallery.css...code in gallery.js //
import React from 'react';
import './Gallery.css';

const heroImages = [
  'https://2.bp.blogspot.com/-mI25zYxJgms/WPNZ3Pu6UVI/AAAAAAAACuk/dHWH3rzn_3Azx4HQLIhSiWpPUMtzTmpowCLcB/s1600/Latest%2BAllu%2BArjun%2BImage.jpg',
  'https://th.bing.com/th/id/OIP.cnDCQv5aD7oWfwgMWQlCMQAAAA?pid=ImgDet&w=184&h=264&c=7&dpr=1.3',
  'https://wallpapercave.com/wp/wp4477507.jpg',
  'https://th.bing.com/th/id/R.1eac7b72a2fbb834eb07dab1037f8677?rik=QRCtfV4fpGKKlg&riu=http%3a%2f%2figmedia.blob.core.windows.net%2figmedia%2ftelugu%2fgallery%2factor%2fnani%2fnani050717_054.jpg&ehk=58XMS%2fCbf4hvHdvWRNnwlTxL3Gs3WAOWbabgmQZzRv0%3d&risl=&pid=ImgRaw&r=0'
];

const heroineImages = [
  'https://filmyfocus.com/wp-content/uploads/2023/09/krithi-shetty.png',
  'https://wallpapers.com/images/hd/telugu-heroines-black-white-db23uwp94g1pp9wi.jpg',
  'https://th.bing.com/th/id/OIP.HfbGQbbocmrlpW-EwQ-MxAHaLG?rs=1&pid=ImgDetMain',
  'https://4.bp.blogspot.com/-vqBZkihfZQ0/US4aDkND0GI/AAAAAAAAgVA/33OgFV9NeXs/s1600/kajal-agarwal-hot-latest+(17).jpg'
];

function Gallery() {
  const handleDownload = (src, index) => {
    const link = document.createElement('a');
    link.href = src;
    link.download = `image_${index + 1}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="gallery-container">
      <h1 className="main-gallery-heading">Image Gallery</h1>
      <h2>Hero Gallery</h2>
      <div className="image-grid">
        {heroImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Hero ${index + 1}`}
            className="gallery-image"
            onClick={() => handleDownload(src, index)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>
      <h2>Heroine Gallery</h2>
      <div className="image-grid">
        {heroineImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Heroine ${index + 1}`}
            className="gallery-image"
            onClick={() => handleDownload(src, index)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
//code in app.js //
import React from 'react';
import Gallery from './Gallery';
import './Gallery.css';
import './App.css';

function App() {
  return (
    <div className="cinematic-container">
      <Gallery />
    </div>
  );
}

export default App;
//code in gallery.css//
html, body {
  height: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.gallery-container {
  max-width: 800px;
  margin: auto;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: #e042b8;
  text-align: center;
  background: radial-gradient(circle at center, rgba(255, 204, 0, 0.1), transparent 70%);
  padding: 20px;
  border-radius: 15px;
  box-shadow:
    0 0 20px 5px rgba(110, 200, 102, 0.3),
    inset 0 0 30px 10px rgba(255, 204, 0, 0.1);
}

.main-gallery-heading {
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color: #701604;
  text-shadow: 0 0 10px #e042b8;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px 8px;
  margin-bottom: 40px;
  justify-items: center;
}

.gallery-image {
  width: 160px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow:
    0 6px 12px rgba(102, 195, 242, 0.6),
    0 0 15px rgba(255, 204, 0, 0.4) inset;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  filter: contrast(1.2) brightness(0.9);
}

.gallery-image:hover {
  transform: scale(1.1);
  box-shadow:
    0 12px 24px rgba(214, 101, 111, 0.9),
    0 0 30px rgba(208, 63, 128, 0.7) inset;
  filter: contrast(1.4) brightness(1);
}


