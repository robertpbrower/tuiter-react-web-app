import React from 'react';

function WhoToFollowListItem({
  who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png' },
}) {
  return (
    <li className="list-group-item">
      <div className="row align-items-center">
        <div className="col-2 px-xl-2 px-lg-1">
          <img className="rounded-circle img-fluid" src={`/images/${who.avatarIcon}`} />
        </div>
        <div className="col p-0">
          {who.userName}
          <i className="fa fa-check-circle p-1" />
          <br />
          @
          {who.handle}
        </div>
        <div className="col-auto">
          <button className="btn btn-primary rounded-pill">Follow</button>
        </div>
      </div>
    </li>
  );
}
export default WhoToFollowListItem;
