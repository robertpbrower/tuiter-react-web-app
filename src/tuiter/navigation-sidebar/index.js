import React from 'react';

function NavigationSidebar(
  {
    active = 'explore',
  },
) {
  return (
    <div className="list-group">
      <a
        href="#"
        className="list-group-item list-group-item-action disabled"
        tabIndex="-1"
        aria-disabled="true"
      >
        <i className="fab fa-twitter text-black" />
      </a>
      <a href="#" className={`list-group-item list-group-item-action ${active === 'home' ? 'active' : ''}`}>
        <i className="fa fa-home pe-1" />
        <span className="d-none d-xl-inline">Home</span>
      </a>
      <a href="#" className={`list-group-item list-group-item-action ${active === 'explore' ? 'active' : ''}`}>
        <i className="fa fa-hashtag pe-1" />
        <span className="d-none d-xl-inline">Explore</span>
      </a>
      <a href="#" className={`list-group-item list-group-item-action ${active === 'notifications' ? 'active' : ''}`}>
        <i className="fa fa-bell pe-1" />
        <span className="d-none d-xl-inline">Notifications</span>
      </a>
      <a href="#" className={`list-group-item list-group-item-action ${active === 'messages' ? 'active' : ''}`}>
        <i className="fa fa-envelope pe-1" />
        <span className="d-none d-xl-inline">Messages</span>
      </a>
      <a href="#" className={`list-group-item list-group-item-action ${active === 'bookmarks' ? 'active' : ''}`}>
        <i className="fa fa-bookmark pe-1" />
        <span className="d-none d-xl-inline">Bookmarks</span>
      </a>
      <a href="#" className={`list-group-item list-group-item-action ${active === 'lists' ? 'active' : ''}`}>
        <i className="fa fa-list pe-1" />
        <span className="d-none d-xl-inline">Lists</span>
      </a>
      <a href="#" className={`list-group-item list-group-item-action ${active === 'profile' ? 'active' : ''}`}>
        <i className="fa fa-user pe-1" />
        <span className="d-none d-xl-inline">Profile</span>
      </a>
      <a href="#" className={`list-group-item list-group-item-action ${active === 'more' ? 'active' : ''}`}>
        <i className="fa fa-ellipsis-h pe-1" />
        <span className="d-none d-xl-inline">More</span>
      </a>

      <div className="btn btn-primary rounded-pill mt-2">
        Tuit
      </div>

    </div>
  );
}
export default NavigationSidebar;
