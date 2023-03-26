import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavigationSidebar() {
  const active = useLocation().pathname
  return (
    <div className="list-group">
      <Link
        to="#"
        className="list-group-item list-group-item-action disabled"
        tabIndex="-1"
        aria-disabled="true"
      >
        <i className="fab fa-twitter text-black" />
      </Link>
      <Link to="/tuiter" className={`list-group-item list-group-item-action ${active === '/tuiter' ? 'active' : ''}`}>
        <i className="fa fa-home pe-1" />
        <span className="d-none d-xl-inline">Home</span>
      </Link>
      <Link to="/tuiter/explore" className={`list-group-item list-group-item-action ${active === '/tuiter/explore' ? 'active' : ''}`}>
        <i className="fa fa-hashtag pe-1" />
        <span className="d-none d-xl-inline">Explore</span>
      </Link>
      <Link to="#" className={`list-group-item list-group-item-action ${active === 'notifications' ? 'active' : ''}`}>
        <i className="fa fa-bell pe-1" />
        <span className="d-none d-xl-inline">Notifications</span>
      </Link>
      <Link to="#" className={`list-group-item list-group-item-action ${active === 'messages' ? 'active' : ''}`}>
        <i className="fa fa-envelope pe-1" />
        <span className="d-none d-xl-inline">Messages</span>
      </Link>
      <Link to="#" className={`list-group-item list-group-item-action ${active === 'bookmarks' ? 'active' : ''}`}>
        <i className="fa fa-bookmark pe-1" />
        <span className="d-none d-xl-inline">Bookmarks</span>
      </Link>
      <Link to="#" className={`list-group-item list-group-item-action ${active === 'lists' ? 'active' : ''}`}>
        <i className="fa fa-list pe-1" />
        <span className="d-none d-xl-inline">Lists</span>
      </Link>
      <Link to="#" className={`list-group-item list-group-item-action ${active === 'profile' ? 'active' : ''}`}>
        <i className="fa fa-user pe-1" />
        <span className="d-none d-xl-inline">Profile</span>
      </Link>
      <Link to="#" className={`list-group-item list-group-item-action ${active === 'more' ? 'active' : ''}`}>
        <i className="fa fa-ellipsis-h pe-1" />
        <span className="d-none d-xl-inline">More</span>
      </Link>

      <div className="btn btn-primary rounded-pill mt-2">
        Tuit
      </div>

    </div>
  );
}
export default NavigationSidebar;
