import React from 'react';
import Work from './components/docs/Work';
import Find from './components/docs/Find';
import Skel from './components/docs/Skeleton-dif';


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
