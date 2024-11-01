import React from 'react';
import './style.css';
import { ISku } from '../../service/interface';

interface Props {
  skus: ISku[];
}

export default function Amount({ skus }: Props) {
  // const all = [
  //   {
  //     size: 'G',
  //     amount: 2,
  //   },
  //   {
  //     size: 'GG',
  //     amount: 4,
  //   },
  //   {
  //     size: 'M',
  //     amount: 1,
  //   },
  //   {
  //     size: 'P',
  //     amount: 5,
  //   },
  // ];

  return (
    <div className="Amount--top">
      <div>
        {skus.map((sku, index) => {
          return (
            <div key={index} className="Amount--item">
              <p>{sku.stock}</p>

              <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="12"
                    fill="#809CAB"
                    stroke="#fff"
                    strokeWidth="1.2"
                  />
                  <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="16"
                  >
                    {sku.size}
                  </text>
                </svg>
              </div>
            </div>
          );
        })}
        <img
          src="data:image/svg+xml,%3csvg%20width='18'%20height='11'%20viewBox='0%200%2018%2011'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group%2063'%3e%3crect%20id='Rectangle%2055'%20y='8'%20width='18'%20height='3'%20fill='%23D9D9D9'/%3e%3crect%20id='Rectangle%2056'%20width='18'%20height='3'%20fill='%23D9D9D9'/%3e%3c/g%3e%3c/svg%3e"
          alt="Icone de igual"
        />
        <div className="Amount--pack">
          <span>PACK</span>
          <div>{skus.reduce((a, b) => a + b.stock, 0)}</div>
        </div>
      </div>
    </div>
  );
}
