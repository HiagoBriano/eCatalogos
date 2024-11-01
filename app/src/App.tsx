import Options from './components/options';
import Details from './components/details';
import Navbar from './components/navbar';
import Amount from './components/amount';
import Price from './components/price';
import React from 'react';
import './App.css';
import Images from './components/images';

function App() {
  const [isReverse, setReverse] = React.useState(false);
  const [isCurrentImage, setCurrentImage] = React.useState(0);

  const nextImage = () => {
    if (isCurrentImage < images.length - 1) {
      setCurrentImage(isCurrentImage + 1);
      return;
    }
  };

  const previousImage = () => {
    if (isCurrentImage > 0) {
      setCurrentImage(isCurrentImage - 1);
      return;
    }
  };

  const item = 'Mochila';
  const reference = '67.15.1340';
  const price = '21.00';

  const images = [
    {
      link: 'https://api.forca-de-vendas.integrador.backup.e-catalogos.net/images/2007/2007-1724352589397.jpg',
      alt: '',
      id: 1,
    },
    {
      link: 'https://api.forca-de-vendas.integrador.backup.e-catalogos.net/images/2007/2007-1724352589446.jpg',
      alt: '',
      id: 2,
    },
    {
      link: 'https://api.forca-de-vendas.integrador.backup.e-catalogos.net/images/2007/2007-1724352589451.jpg',
      alt: '',
      id: 3,
    },
  ];

  return (
    <div className="App">
      <Navbar />
      <Images
        images={images[isCurrentImage]}
        nextImage={nextImage}
        previousImage={previousImage}
      />

      <div className={`Under`}>
        <Options images={images} setCurrentImage={setCurrentImage} />

        <span
          style={{
            fontSize: '13px',
            color: 'rgb(121, 121, 121)',
            textAlign: 'center',
            width: '100%',
            fontFamily: 'Roboto',
          }}
        >
          Preços ilustrativos
        </span>
        <div className="Line" />

        <Details
          item={item}
          reference={reference}
          price={price}
          isReverse={isReverse}
          setReverse={setReverse}
        />

        <div className={`${isReverse && 'Under--reverse'}`}>
          <Price />
          <Amount />
        </div>
      </div>
    </div>
  );
}

export default App;
