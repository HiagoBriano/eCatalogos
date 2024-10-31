import React from 'react';
import './style.css';

export default function Navbar() {
  return (
    <div className="Navbar--top">
      <div>
        <svg
          stroke="currentColor"
          fill="#ffffff"
          strokeWidth="0"
          viewBox="0 0 1024 1024"
          cursor="pointer"
          height="20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path>
        </svg>

        <div className="Navbar--center">
          <svg
            stroke="currentColor"
            fill="#FFf"
            strokeWidth="0"
            viewBox="0 0 512 512"
            cursor="pointer"
            height="20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
            // style="margin-right: 4px;"
          >
            <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"></path>
          </svg>
          <p>(1) acessórios</p>

          <svg
            stroke="currentColor"
            fill="#FFF"
            strokeWidth="0"
            viewBox="0 0 512 512"
            cursor="pointer"
            height="20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
            // style="margin-left: 4px;"
          >
            <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"></path>
          </svg>
        </div>

        <button className="Navbar--right">F</button>
      </div>
    </div>
  );
}
