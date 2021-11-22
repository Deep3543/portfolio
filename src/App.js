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
      {/* < Nav />
      < Skeleton /> */}
      < Nav />
      < Skel />
      {/* TODO: Make Changes here */}
      < Work />
      < Find />
    </div>
  );
}

export default App;
