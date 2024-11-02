import React from 'react';
import './style.css';

interface IProps {
  name: string;
  reference: string;
  category: string;
  brand: string;
  gender: string;
  color?: string;
  close: (data: boolean) => void;
}

export default function Info({
  name,
  reference,
  brand,
  category,
  gender,
  close,
}: IProps) {
  return (
    <div className="Info--data-background">
      <div className="Info--top">
        <div>
          <div className="Info--title">
            <div onClick={() => close(false)}>
              <svg
                stroke="currentColor"
                fill="#fff"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                fillRule="evenodd"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"></path>
              </svg>
            </div>
            <h1>Informações</h1>
          </div>

          <div className="Info--data">
            <p className="Info--data-title">Cores</p>
            <div></div>
            <p className="Info--data-p">
              Nome do produto: <span>{name}</span>
            </p>
            <p className="Info--data-p">
              Referencia: <span>{reference}</span>
            </p>
            <p className="Info--data-p">
              Marca: <span>{brand}</span>
            </p>
            <p className="Info--data-p">
              Categoria: <span>{category}</span>
            </p>
            <p className="Info--data-p">
              Genero: <span>{gender}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
