import React from 'react';
import TuitItem
  from './tuit-item.js';
import { useSelector } from "react-redux";


function TuitList() {
  const postsArray = useSelector(state => state.tuits)
  return (
    <ul className="list-group">
      {
        postsArray.map((post) => (
          <TuitItem
            key={post._id}
            post={post} />
        ))
      }
    </ul>
  );
}
export default TuitList;
