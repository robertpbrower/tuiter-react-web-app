/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PostSummaryList from '../post-summary-list';

function ExploreComponent() {
  return (
    <>
      <div className="row">
        <div className="col position-relative align-self-center">
          <div className="position-absolute start-0 ms-4 mt-1">
            <i className="fa fa-search" />
          </div>
          <input type="text" placeholder="Search Tuiter" className="rounded-pill ps-5 w-100 border-1 wd-content-border" />
        </div>
        <div className="col-auto align-self-center">
          <a href="explore-settings.html" className="">
            <i className="fa fa-cog fa-2x" />
          </a>
        </div>

      </div>
      <ul className="nav nav-tabs mt-2 mb-2">
        <li className="nav-item">
          <a className="nav-link active" href="for-you.html">For you</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="trending.html">Trending</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="news.html">News</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="sports.html">Sports</a>
        </li>
        <li className="nav-item d-none d-md-block">
          <a className="nav-link" href="entertainment.html">Entertaiment</a>
        </li>
      </ul>

      <div className="position-relative">
        <img src="../../images/starship.jpeg" className="img-fluid" />
        <div className="h2 text-white position-absolute bottom-0 start-0 ps-2">
          SpaceX Starship
        </div>
      </div>
      <PostSummaryList />
    </>
  );
}
export default ExploreComponent;
