import React from 'react';
import TuitList
  from './tuits-list.js';
import WhatsHappening from './whats-happening.js';


function Home() {
  return (
    <div>
      <h2>Home</h2>
      <WhatsHappening />
      <TuitList></TuitList>
    </div>

  );
}
export default Home;
