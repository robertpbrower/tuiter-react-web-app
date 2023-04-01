import React from 'react';
import TuitStats from './tuit-stats';
import { useDispatch } from 'react-redux';
import { deleteTuitThunk } from "../../services/tuits-thunks";

function TuitItem({ post }) {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }

  return (
    <li className="list-group-item p-0">
      <div className="p-2 row m-0">
        <div className="col-2 px-xl-2 px-lg-1 text-center">
          <img className="rounded-circle img-fluid" style={{ width: 75 }} src={`/images/${post.image}`} />
        </div>
        <div className="col-10">
          <div className="">
            <i className="bi bi-x-lg float-end"
              onClick={() => deleteTuitHandler(post._id)}></i>
            <span className='fw-bold'>
              {post.username}
            </span>
            {' '}
            <i className='fa fa-check-circle' />
            {' '}
            {post.handle}
            {' '}
            -
            {' '}
            {post.time}
          </div>
          <div>
            {post.tuit}
          </div>
          <div>
            {post.tweets ? `<div class="text-secondary">${post.tweets} Tuits</div>` : ''}
          </div>
          <TuitStats tuit={post}></TuitStats>
        </div>
      </div>
    </li>
  );
}
export default TuitItem;