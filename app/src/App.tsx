/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ToastContainer, toast } from 'react-toastify';
import { IProduct } from './service/interface';
import Options from './components/options';
import Details from './components/details';
import React, { useEffect } from 'react';
import Navbar from './components/navbar';
import Amount from './components/amount';
import Images from './components/images';
import Product from './service/product';
import Price from './components/price';
import './App.css';

interface ICategories {
  [key: string]: IProduct[];
}

function App() {
  const [isReverse, setReverse] = React.useState(false);
  const [isLoading, setLoading] = React.useState(true);
  const [isError, setError] = React.useState(false);

  // const [isImages, setImages] = React.useState<IImage[]>([]);
  const [isCurrentImage, setCurrentImage] = React.useState(0);

  const [isCurrentCategory, setCurrentCategory] = React.useState(0);
  const [isNamesCategories, setNamesCategories] = React.useState<string[]>([]);
  const [isDataCategoris, setDataCategories] = React.useState<ICategories>({});

  // const [isDataProduct, setDataProduct] = React.useState<IProduct>();
  const [isCurrentProduct, setCurrentProduct] = React.useState(0);

  const validData = (product: IProduct) => {
    if (!product || product.images.length < 1) {
      return false;
    }

    return true;
  };

  const getData = async () => {
    const response = await Product.getAll();

    if (!response.success) {
      toast.error('Erro ao busar os produtos');
      setError(true);
      return;
    }

    if (response.data) {
      const categories: ICategories = {};

      response.data.forEach((product) => {
        if (validData(product)) {
          if (!categories[product.category]) {
            categories[product.category] = [product];
          } else {
            categories[product.category].push(product);
          }
        }
      });

      const namesCategories = Object.keys(categories);

      setDataCategories(categories);
      setNamesCategories(namesCategories);

      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const nextProduct = () => {
    const currentProduct = isCurrentProduct;

    if (
      currentProduct <
      isDataCategoris![isNamesCategories[isCurrentCategory]].length - 1
    ) {
      setCurrentProduct(currentProduct + 1);

      setCurrentImage(0);
      return;
    }

    nextCategory();
    return;
  };

  const previousProduct = () => {
    if (isCurrentProduct > 0) {
      setCurrentProduct(isCurrentProduct - 1);

      setCurrentImage(0);
      return;
    }

    previousCategory(true);
    return;
  };

  const nextCategory = () => {
    if (isCurrentCategory < isNamesCategories.length - 1) {
      setCurrentImage(0);
      setCurrentProduct(0);
      setCurrentCategory(isCurrentCategory + 1);

      return;
    }

    setCurrentImage(0);
    setCurrentProduct(0);
    setCurrentCategory(0);

    return;
  };

  const previousCategory = (end?: boolean) => {
    if (isCurrentCategory > 0) {
      const next = isCurrentCategory - 1;

      setCurrentImage(0);

      if (end === true) {
        setCurrentProduct(isDataCategoris[isNamesCategories[next]].length - 1);
      } else {
        setCurrentProduct(0);
      }

      setCurrentCategory(next);

      return;
    }

    const nextCategory = isNamesCategories.length - 1;

    setCurrentImage(0);
    setCurrentProduct(
      isDataCategoris[isNamesCategories[nextCategory]].length - 1,
    );
    setCurrentCategory(nextCategory);

    return;
  };

  if (isError) {
    return (
      <div>
        <h1>Ops, algo deu errado!</h1>
        <p>por favor entre em contato com o desenvolvedor</p>
      </div>
    );
  }

  if (isLoading) {
    return <h1>Carregando...</h1>;
  }

  return (
    <div className="App">
      <ToastContainer />

      <Navbar
        next={nextCategory}
        previous={previousCategory}
        category={isNamesCategories[isCurrentCategory]}
        amount={isDataCategoris[isNamesCategories[isCurrentCategory]].length}
      />

      <Images
        images={
          isDataCategoris[isNamesCategories[isCurrentCategory]][
            isCurrentProduct
          ].images[isCurrentImage]
        }
        nextImage={nextProduct}
        previousImage={previousProduct}
      />

      <div className={`Under`}>
        <Options
          images={
            isDataCategoris[isNamesCategories[isCurrentCategory]][
              isCurrentProduct
            ].images
          }
          setCurrentImage={setCurrentImage}
        />

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
          product={
            isDataCategoris[isNamesCategories[isCurrentCategory]][
              isCurrentProduct
            ]
          }
          isReverse={isReverse}
          setReverse={setReverse}
        />

        <div className={`${isReverse && 'Under--reverse'}`}>
          <Price />
          <Amount
            skus={
              isDataCategoris[isNamesCategories[isCurrentCategory]][
                isCurrentProduct
              ].skus
            }
          />
        </div>
      </div>
    </div>
  );
}

export default App;
