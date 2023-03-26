import React from 'react';
import { useDispatch } from 'react-redux';
import { likeToggle } from '../tuits/tuits-reducer.js';


function TuitStats({
  tuit = { replies: 123, retuits: 456, likes: 789, liked: true }
}) {
  const dispatch = useDispatch();
  const onlikeHandler = () => {
    dispatch(likeToggle(tuit))
  }
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
        <span onClick={onlikeHandler}>
          <i className={`${tuit.liked ? 'fas fa-heart text-danger' : 'far fa-heart'} pe-1`} ></i>
          {tuit.likes + (tuit.liked ? 1 : 0)}
        </span>
      </div>
      <div className='col text'>
        <i className='fa fa-share-alt pe-1'></i>
      </div>

    </div >
  );
}
export default TuitStats;