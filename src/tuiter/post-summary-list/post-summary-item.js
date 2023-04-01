import React from 'react';

function PostSummaryItem({
  post = {
    topic: 'Space',
    userName: 'SpaceX',
    time: '2h',
    title: "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
    image: 'tesla.png',
  },
}) {
  return (
    <li className="list-group-item p-0">
      <div className="p-2 row m-0">
        <div className="col-10">
          <div className="text-secondary">

            {post.username}
            {' '}
            -
            {' '}
            {post.time}
          </div>
          <div className="fw-bold">
            {post.topic}
          </div>
          <div className="">
            {post.title}
          </div>
          {post.tweets ? `<div class="text-secondary">${post.tweets} Tuits</div>` : ''}
        </div>
        <div className="col-2 align-self-center p-1 rounded-3">
          <img src={`/images/${post.image}`} className="img-fluid rounded-3" />
        </div>
      </div>
    </li>
  );
}
export default PostSummaryItem;
