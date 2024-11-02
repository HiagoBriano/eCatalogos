import { FormatPrice } from '../../App';
import React from 'react';
import './style.css';

interface IProps {
  totalCurrent: number;
  total: number;
  qtd: number | null;
  sum: () => void;
  less: () => void;
}

export default function Price({ totalCurrent, total, qtd, sum, less }: IProps) {
  return (
    <>
      <div className="Price--top">
        <div className="Price--current">
          <p className="Price--current--title">Atual</p>
          <p className="Price--current--amount">
            {`R$ ${FormatPrice(totalCurrent)}`}
          </p>
        </div>

        <div className="Price--center">
          <img
            onClick={less}
            src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='37'%20height='36'%20viewBox='0%200%2037%2036'%20fill='none'%3e%3ccircle%20cx='18.5'%20cy='18'%20r='17.5'%20fill='%23809CAA'%20stroke='white'/%3e%3crect%20x='5.64243'%20y='19.9287'%20width='3.85714'%20height='25.7143'%20transform='rotate(-90%205.64243%2019.9287)'%20fill='white'/%3e%3c/svg%3e"
          />
          <p>{qtd || 0}</p>
          <img
            onClick={sum}
            src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='37'%20height='36'%20viewBox='0%200%2037%2036'%20fill='none'%3e%3ccircle%20cx='18.5'%20cy='18'%20r='17.5'%20fill='%23809CAA'%20stroke='white'/%3e%3crect%20x='16.5716'%20y='5.14307'%20width='3.85714'%20height='25.7143'%20fill='white'/%3e%3crect%20x='5.64243'%20y='19.9287'%20width='3.85714'%20height='25.7143'%20transform='rotate(-90%205.64243%2019.9287)'%20fill='white'/%3e%3c/svg%3e"
          />
        </div>

        <div className="Price--current">
          <p className="Price--current--title">Acumulado</p>
          <p className="Price--current--amount">R$ {FormatPrice(total)}</p>
        </div>
      </div>
    </>
  );
}
