import ExploreComponent from './explore';
import NavigationSidebar from './navigation-sidebar';
import WhoToFollowList from './who-to-follow-list';
import { Routes, Route } from "react-router"
import whoReducer
  from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import { configureStore }
  from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import TuitList from './home/index.js';
import Home from './home/index.js';
const store = configureStore(
  { reducer: { who: whoReducer, tuitsData: tuitsReducer } });

function Tuiter() {
  return (
    <Provider store={store}>
      <Routes>
        <Route
          path="/*"
          element=
          {
            <div className="row my-2">
              <div className="col-auto">
                <NavigationSidebar />
              </div>
              <div className="col">
                <Home />
              </div>
              <div className="col-4 d-none d-lg-block">
                <WhoToFollowList />
              </div>
            </div>
          }
        />
        <Route
          path='/explore'
          element=
          {
            <div className="row my-2">
              <div className="col-auto">
                <NavigationSidebar />
              </div>
              <div className="col">
                <ExploreComponent />
              </div>
              <div className="col-4 d-none d-lg-block">
                <WhoToFollowList />
              </div>
            </div>
          }
        />
      </Routes>
    </Provider>
  );
}
export default Tuiter;
