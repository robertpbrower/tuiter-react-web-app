import React from 'react';
import TuitItem
  from './tuit-item.js';



function TuitStats({
  tuit = { replies: 123, retuits: 456, likes: 789, liked: true }
}) {
  return (
    <div className='row pt-3'>
      <div className='col text'>
        <i className='far fa-comment pe-1'></i>
        {tuit.replies}
      </div>
      <div className='col text'>
        <i className='fa fa-sync pe-1'></i>
        {tuit.retuits}
      </div>
      <div className='col text'>
        <i className={`${tuit.liked ? 'fas fa-heart text-danger' : 'far fa-heart'} pe-1`}></i>
        {tuit.likes}
      </div>
      <div className='col text'>
        <i className='fa fa-share-alt pe-1'></i>
      </div>

    </div >
  );
}
export default TuitStats;