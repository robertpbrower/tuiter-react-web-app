import ExploreComponent from './explore';
import NavigationSidebar from './navigation-sidebar';
import WhoToFollowList from './who-to-follow-list';

function Tuiter() {
  return (
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
  );
}
export default Tuiter;
