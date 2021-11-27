import React from 'react';
import Skeleton from './components/docs/Skeleton';
import Work from './components/docs/Work';
import Find from './components/docs/Find';
import Nav from './components/docs/views/Nav-dif';
import Skel from './components/docs/Skeleton-dif';
import {Link, animateScroll as scroll} from 'react-scroll';


function App() {
  return (
    <div className="app">
      {/* Back Design */}
      <i className="back-svg swirl">
        <svg width="1359" height="3232" viewBox="0 0 1359 3232" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_263_141)">
          <path d="M424.031 27.7871C419.918 43.0904 415.721 50.1229 405 60C405 60 407.5 46 404.5 32C401.5 18 392.5 9.49999 392.5 9.49999C406.788 13.1623 413.693 17.1229 424.031 27.7871Z" stroke="black" stroke-opacity="0.15" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <g filter="url(#filter1_d_263_141)">
          <path d="M297.5 58.4999C654.108 -57.5575 1335 27.4998 1245 681.5C1155 1335.5 -381.929 1667.61 131 1147C643.929 626.389 1604.82 1266.6 1261 1790.5C917.181 2314.4 -402.535 2684.74 131 2088.5C664.535 1492.26 1594 2263 1218.5 2820C843 3377 177 3142.5 177 3142.5" stroke="black" stroke-opacity="0.2" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
          <filter id="filter0_d_263_141" x="387.5" y="4.49953" width="61.5316" height="95.5005" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="10" dy="25"/>
          <feGaussianBlur stdDeviation="5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_263_141"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_263_141" result="shape"/>
          </filter>
          <filter id="filter1_d_263_141" x="0.554749" y="9.76901" width="1358.06" height="3221.73" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="10" dy="25"/>
          <feGaussianBlur stdDeviation="5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_263_141"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_263_141" result="shape"/>
          </filter>
          </defs>
        </svg>
      </i>
      {/* < Nav />
      < Skeleton /> */}
      < Nav />
      < Skel />
      {/* TODO: Make Changes here */}
      < Work />
      < Find />
      <footer className="credit"><span className="foot">Designed & Developed by </span><span className="foot-name">Deep Patel</span></footer>
    </div>
  );
}

export default App;
