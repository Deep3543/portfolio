import React from 'react';
import Skeleton from './components/docs/Skeleton';
import Work from './components/docs/Work';
import Find from './components/docs/Find';
import Skel from './components/docs/Skeleton-dif';
import {Link, animateScroll as scroll} from 'react-scroll';


function App() {
  return (
    <div className="app">
      {/* < Nav />
      < Skeleton /> */}
      < Skel />
      < Work />
      < Find />
      <footer className="credit"><span className="foot">Designed & Developed by </span><span className="foot-name">Deep Patel</span></footer>
    </div>
  );
}

export default App;
