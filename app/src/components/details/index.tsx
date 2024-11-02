import { IProduct } from '../../service/interface';
import { FormatPrice } from '../../App';
import React from 'react';
import './style.css';

interface Props {
  product: IProduct;
  isReverse: boolean;
  setReverse: (data: boolean) => void;
}

export default function Details({ product, isReverse, setReverse }: Props) {
  return (
    <div className="Details--top">
      <div onClick={() => setReverse(!isReverse)} className="Details--button">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 20 20"
          aria-hidden="true"
          className="sc-jEZPox dpfVlH"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M2.24 6.8a.75.75 0 001.06-.04l1.95-2.1v8.59a.75.75 0 001.5 0V4.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0L2.2 5.74a.75.75 0 00.04 1.06zm8 6.4a.75.75 0 00-.04 1.06l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V6.75a.75.75 0 00-1.5 0v8.59l-1.95-2.1a.75.75 0 00-1.06-.04z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <p className="sc-bIeMhe QHtja">{product.name}</p>

      <p className="sc-loZNoV gscSqx">
        REF: <span className="sc-jrHiGu jtJlrV">{product.reference}</span>
      </p>

      <p className="sc-iXEBes cHHQRc">
        <span style={{ fontSize: '10px' }}>R$</span>{' '}
        <span className="sc-dFxqPF hsCNIb">
          {product.price ? FormatPrice(product.price) : '10,00'}
        </span>
      </p>
    </div>
  );
}
